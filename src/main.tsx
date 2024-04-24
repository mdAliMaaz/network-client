import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/custom/ThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="app-theme">
          <App />
          <Toaster />
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  </RecoilRoot>
);
