import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import AuthPage from "./ui/pages/AuthPage/AuthPage";
import DashboardPage from "./ui/pages/DashboardPage/DashboardPage";
import GamePage from "./ui/pages/GamePage/GamePage";
import CreateGamePage from "./ui/pages/CreateGamePage/CreateGamePage";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="/create-game" element={<CreateGamePage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
