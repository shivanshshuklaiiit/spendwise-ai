# SpendWise AI

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-9-orange?style=flat&logo=firebase)](https://firebase.google.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-API-412991?style=flat&logo=openai)](https://openai.com/)
[![License](https://img.shields.io/github/license/shivanshshuklaiiit/spendwise-ai)](https://github.com/shivanshshuklaiiit/spendwise-ai/blob/main/LICENSE)

## Overview

SpendWise AI is an intelligent personal finance management application built with Next.js that leverages artificial intelligence to help users track expenses, analyze spending patterns, and receive personalized financial insights. The application employs modern web technologies and machine learning to deliver a seamless user experience focused on improving financial decision-making.

![SpendWise AI Dashboard](https://github.com/user-attachments/assets/5c5351f7-8c23-4863-adfb-bb5468d3f5f6)

## Key Features

### Financial Management
- **Transaction Management:** Comprehensive CRUD operations for financial transactions
- **Categorization Engine:** Smart, AI-assisted transaction categorization with manual override capabilities
- **Multi-account Support:** Track expenses across different payment methods and accounts

### Analytics & Reporting
- **Interactive Dashboard:** Real-time financial health visualization with customizable widgets
- **Expense Analysis:** Multidimensional analysis across time periods, categories, and merchants
- **Export Capabilities:** Generate detailed reports in multiple formats (CSV, PDF)

### AI-Powered Insights
- **Personalized Recommendations:** Context-aware financial advice based on spending patterns
- **Anomaly Detection:** Identification of unusual transactions and spending outliers
- **Predictive Analytics:** Forecast future expenses based on historical data and recurring patterns
- **Budget Optimization:** AI-suggested budget adjustments to help reach financial goals

### User Experience
- **Responsive Design:** Optimized UX across desktop, tablet, and mobile devices
- **Dark/Light Mode:** Visually comfortable interface for any environment
- **Progressive Web App (PWA):** Installable application with offline capabilities
- **Authentication:** Secure sign-in with email, Google, and passwordless options

## Architecture

SpendWise AI is built on a modern tech stack with scalability and performance in mind:

- **Frontend:** Next.js 14 (React 18) with App Router for server components and efficient rendering
- **Styling:** Tailwind CSS with custom design system components
- **State Management:** React Context API with custom hooks for state synchronization
- **Backend Services:** Firebase for authentication, Firestore for database, and Cloud Functions
- **AI Integration:** OpenAI API for natural language processing and financial insights
- **Data Visualization:** Recharts for responsive and interactive data presentation
- **API Layer:** RESTful endpoints with Next.js API routes

## Getting Started

### Prerequisites
- Node.js 18.17.0 or later
- npm, yarn, pnpm, or bun package manager
- Firebase project with appropriate services enabled
- OpenAI API key

### Environment Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/shivanshshuklaiiit/spendwise-ai.git
   cd spendwise-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or 
   pnpm install
   # or
   bun install
   ```

3. Configure environment variables by creating a `.env.local` file:
   ```
   # Next.js
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   
   # Firebase
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   
   # OpenAI
   OPENAI_API_KEY=your_openai_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Firebase Configuration

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Configure Authentication with Email/Password and Google providers
3. Set up Firestore Database with appropriate security rules
4. Configure Firebase storage for handling user uploads (if needed)
5. Update the `.env.local` file with your Firebase configuration details

## Project Structure

```
spendwise-ai/
├── app/                       # Next.js App Router structure
│   ├── api/                   # API routes
│   ├── auth/                  # Authentication pages
│   ├── dashboard/             # Dashboard and main application views
│   ├── insights/              # AI insights and recommendations
│   ├── reports/               # Financial reports and analytics
│   ├── settings/              # User settings and preferences
│   ├── transactions/          # Transaction management
│   ├── error.js               # Error handling
│   ├── layout.js              # Root layout
│   ├── loading.js             # Loading states
│   └── page.js                # Home page
├── components/                # React components
│   ├── analytics/             # Chart and data visualization components
│   ├── auth/                  # Authentication components
│   ├── dashboard/             # Dashboard widgets and components
│   ├── insights/              # AI insights components
│   ├── transactions/          # Transaction-related components
│   ├── ui/                    # Reusable UI components
│   └── providers/             # Context providers
├── lib/                       # Utility libraries
│   ├── firebase/              # Firebase client and server configurations
│   ├── openai/                # OpenAI integration utilities
│   ├── hooks/                 # Custom React hooks
│   └── utils/                 # Helper functions
├── public/                    # Static assets
├── styles/                    # Global styles
├── middleware.js              # Next.js middleware
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── .env.example               # Example environment variables
├── package.json               # Project dependencies
└── README.md                  # Project documentation
```

## Development Guidelines

### Code Style and Standards
- ESLint and Prettier configured for consistent code style
- Component organization follows atomic design principles
- TypeScript for type safety and improved developer experience
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) specification

### State Management
- Server components for data fetching when possible
- React Context API for global state management
- SWR for client-side data fetching with caching

### Testing Strategy
- Jest for unit testing
- React Testing Library for component tests
- Cypress for end-to-end testing
- Mock Service Worker for API mocking

## Performance Optimization

SpendWise AI implements several performance optimizations:

- **Server Components:** Reduced client-side JavaScript with Next.js App Router
- **Image Optimization:** Using Next.js Image component with proper sizing and formats
- **Code Splitting:** Automatic code splitting and lazy loading of components
- **Edge Caching:** Leveraging Vercel's edge network for optimal loading times
- **Database Indexing:** Strategic Firestore indexes for query performance

## Deployment

The application is optimized for deployment on Vercel:

1. Connect your GitHub repository to [Vercel](https://vercel.com/new)
2. Configure environment variables in the Vercel dashboard
3. Deploy automatically with continuous integration on main branch

Alternative deployment options:
- Firebase Hosting with GitHub Actions for CI/CD
- Docker containerization for custom hosting solutions

## Roadmap

### Short-term (Q2 2025)
- Bank account integration via Plaid API
- Enhanced transaction search and filtering
- Multi-currency support with real-time conversion

### Mid-term (Q3-Q4 2025)
- Bill payment reminders and scheduling
- Shared expense tracking for households
- Investment portfolio tracking and analysis

### Long-term (2026+)
- Advanced financial forecasting with machine learning models
- Retirement planning and goal-based savings tools
- Custom financial insights engine with user-specific learning

## Contributing

We welcome contributions from the community! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with appropriate tests
4. Run the test suite (`npm test`)
5. Commit changes following our commit convention
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request with detailed description

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) team for the excellent React framework
- [Vercel](https://vercel.com/) for hosting and deployment infrastructure
- [Firebase](https://firebase.google.com/) for backend services
- [OpenAI](https://openai.com/) for AI capabilities
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- All [contributors](https://github.com/shivanshshuklaiiit/spendwise-ai/graphs/contributors) who have helped improve this project

---

Built with precision and passion by the SpendWise AI Engineering Team.
