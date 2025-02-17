import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";

const rootElement = document.getElementById("root");
createRoot(rootElement!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
