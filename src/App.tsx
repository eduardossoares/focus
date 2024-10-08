import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import AuthPage from "./pages/authPage";

import { Private } from "./routes/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Private><Dashboard /></Private>
  },
  {
    path: "/acessar",
    element: <AuthPage />
  }
])

export default router;