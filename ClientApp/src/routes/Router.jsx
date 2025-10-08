import App from "../App";
import { createBrowserRouter } from "react-router";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/extra-route", element: <div>I'm here for funsies</div> },
]);
