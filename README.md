# F1 What-If Simulator: Frontend

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TanStack Query](https://img.shields.io/badge/-TanStack%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

This repository contains the frontend code for the **F1 What-If Simulator**, a web application built with React and TypeScript. It provides a user interface to interact with the [F1 Simulator Backend API](https://github.com/your-username/f1-simulator-api), allowing users to run machine learning-powered race simulations.

## ✨ Live Demo

**[View the live application here!](https://your-live-app-url.netlify.app/)**  
*Replace with your actual live URL*

## 🚀 Features

- **Interactive Simulation Controls:** Select a past Grand Prix and a driver from dynamically populated dropdowns
- **Strategic Input:** Modify a driver's historical pit stop lap to create a "what if" scenario
- **Dynamic Results Visualization:** View a clear, side-by-side comparison of the original and simulated race outcomes
- **Responsive Design:** A seamless experience on both desktop and mobile devices
- **Real-time Feedback:** Integrated loading states and user-friendly error notifications provide a smooth user experience

![Screenshot of F1 What-If Simulator](./public/screenshot.png)  
*It is highly recommended to add a screenshot of your finished app here*

## 🛠️ Tech Stack & Architecture

This project was built with a modern, maintainable, and performant tech stack, emphasizing a clean architecture.

### Core Technologies

- **Framework:** **React 18** with **Vite** for a fast development experience
- **Language:** **TypeScript** for robust type safety
- **Server State Management:** **TanStack Query (React Query)** for all server communication, handling data fetching, caching, and mutations with ease
- **Styling:** **Tailwind CSS** for a utility-first approach to building a responsive and consistent design system
- **Linting & Formatting:** **ESLint** and **Prettier** for maintaining a consistent and high-quality codebase

### Architectural Highlights

- **Component-Based Structure:** The application is built using small, reusable components with a clear separation of concerns
- **State Separation:** A strict separation is maintained between **Server Cache State** (managed by TanStack Query) and **UI State** (managed by React's `useState`)
- **Centralized API Logic:** All API calls are organized in a dedicated service layer, keeping components clean and focused on the UI
- **Accessibility First:** The application is built with semantic HTML and ARIA attributes to ensure it is accessible to all users

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18.x or later)
- npm or yarn
- A running instance of the [F1 Simulator Backend API](https://github.com/your-username/f1-simulator-api)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/f1-simulator-ui.git
   cd f1-simulator-ui
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root of the project by copying the example file:
   ```bash
   cp .env.example .env
   ```
   
   Open the `.env` file and set the `VITE_API_BASE_URL` to the URL where your backend API is running (e.g., `http://127.0.0.1:8000`):
   
   ```env
   # .env
   VITE_API_BASE_URL=http://127.0.0.1:8000
   ```

### Running the Development Server

To start the Vite development server with hot-reloading:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view the application in your browser.

## 🧪 Running Tests

This project uses **Vitest** for running unit and integration tests.

```bash
npm run test
```

## 📜 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production-ready build of the application in the `/dist` folder
- `npm run lint` - Lints the codebase using ESLint
- `npm run preview` - Serves the production build locally to preview it before deployment
- `npm run test` - Runs the test suite

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! We are excited to see the community get involved.

Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.