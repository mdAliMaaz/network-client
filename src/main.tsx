import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/custom/ThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider defaultTheme="dark" storageKey="app-theme">
      <App />
      <Toaster />
    </ThemeProvider>
  </BrowserRouter>
);
