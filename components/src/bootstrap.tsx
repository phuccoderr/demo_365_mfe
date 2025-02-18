import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const rootElement = document.getElementById("root");
createRoot(rootElement!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
