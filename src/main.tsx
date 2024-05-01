import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/custom/ThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import LoadingSpinner from "./components/custom/LoadingSpinner.tsx";
import { SocketContextProvider } from "./context/SocketContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <Suspense fallback={<LoadingSpinner />}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="app-theme">
          <SocketContextProvider>
            <App />
            <Toaster />
          </SocketContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  </RecoilRoot>
);
