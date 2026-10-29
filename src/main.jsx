import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LangProvider } from "./context/LangContext";
import "./index.css";
import { ErrorBoundary } from "./components/ErrorBoundary";

// تحديد الـ basename 
const basename = import.meta.env.MODE === "production" ? "/WARETH" : "";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={basename}>
    <LangProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </LangProvider>
  </BrowserRouter>
);