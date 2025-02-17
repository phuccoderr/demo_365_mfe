import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React, { lazy, Suspense } from "react";

const AboutPage = lazy(() => import("About/App"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<div>Loading...</div>}>{<AboutPage />}</Suspense>
    ),
  },
]);

export default router;
