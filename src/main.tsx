import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/custom/ThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { RecoilRoot } from "recoil";
import React from "react";
import Loading from "./components/custom/Loading.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="app-theme">
          <App />
          <Toaster />
        </ThemeProvider>
      </BrowserRouter>
    </React.Suspense>
  </RecoilRoot>
);
