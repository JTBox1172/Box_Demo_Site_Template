import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes/Router"

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);