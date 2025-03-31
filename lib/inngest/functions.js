import { sendEmail } from "@/actions/send-email";
import { db } from "../prisma";
import { inngest } from "./client";
import EmailTemplate from "@/emails/template";

export const checkBudgetAlert = inngest.createFunction(
    { name: "Check Budget Alerts" },
    { cron: "0 */6 * * *" }, // Every 6 hours
    async ({ step }) => {
      const budgets = await step.run("fetch-budgets", async () => {
        return await db.budget.findMany({
          include: {
            user: {
              include: {
                accounts: {
                  where: {
                    isDefault: true,
                  },
                },
              },
            },
          },
        });
      });
  
      for (const budget of budgets) {
        const defaultAccount = budget.user.accounts[0];
        if (!defaultAccount) continue; // Skip if no default account
  
        await step.run(`check-budget-${budget.id}`, async () => {
          const startDate = new Date();
          startDate.setDate(1); // Start of current month
  
          // Calculate total expenses for the default account only
          const expenses = await db.transaction.aggregate({
            where: {
              userId: budget.userId,
              accountId: defaultAccount.id, // Only consider default account
              type: "EXPENSE",
              date: {
                gte: startDate,
              },
            },
            _sum: {
              amount: true,
            },
          });
  
          const totalExpenses = expenses._sum.amount?.toNumber() || 0;
          const budgetAmount = budget.amount;
          const percentageUsed = (totalExpenses / budgetAmount) * 100;

          let alertSent = false;
          console.log("Sending email to:", budget.user.email);
          // Check if we should send an alert
          if (
            percentageUsed >= 80 && // Default threshold of 80%
            (!budget.lastAlertSent ||
              isNewMonth(new Date(budget.lastAlertSent), new Date()))
          ) {
            try {
                await sendEmail({
                  to: budget.user.email,
                  subject: `Budget Alert for ${defaultAccount.name}`,
                  react: EmailTemplate({
                    userName: budget.user.name,
                    type: "budget-alert",
                    data: {
                      percentageUsed,
                      budgetAmount: parseInt(budgetAmount).toFixed(1),
                      totalExpenses: parseInt(totalExpenses).toFixed(1),
                      accountName: defaultAccount.name,
                    },
                  }),
                });
                console.log("Email sent to:", budget.user.email);
              } catch (error) {
                console.error("Error sending email:", error);
              }
  
            // Update last alert sent
            await db.budget.update({
              where: { id: budget.id },
              data: { lastAlertSent: new Date() },
            });
            alertSent = true;
          }
          return { alertSent, percentageUsed, email:budget.user.email };
        });
      }
    }
  );
  
  function isNewMonth(lastAlertDate, currentDate) {
    return (
      lastAlertDate.getMonth() !== currentDate.getMonth() ||
      lastAlertDate.getFullYear() !== currentDate.getFullYear()
    );
  }
