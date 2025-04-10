import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SpendWise",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    
    <ClerkProvider>
    <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors/>
          <footer className="bg-blue-50 py-12 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
              <p>Made with 💗 by Shivansh Shukla</p>
            </div>
          </footer>
          </ThemeProvider>

        </body>
      </html>
      </ClerkProvider>
  );
}
