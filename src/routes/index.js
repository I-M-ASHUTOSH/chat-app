import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";
import MainLayout from "../layouts/main";
// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
// import Settings from "../pages/dashboard/Settings";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: <MainLayout/>,
      children: [
        { element: <LoginPage/> ,path:"login" },
        { element: <RegisterPage/> ,path:"register" },
        { element: <ResetPasswordPage/> ,path:"reset-password" },
        { element: <NewPasswordPage/> ,path:"new-password" }

        
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "settings", element: <Settings /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },

      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
const LoginPage = Loadable(
  lazy(() => import("../pages/auth/Login")),
);
const RegisterPage = Loadable(
  lazy(() => import("../sections/settings/auth/Register")),
);
const ResetPasswordPage = Loadable(
  lazy(() => import("../../src/pages/auth/ResetPassword")),
);
const NewPasswordPage = Loadable(
  lazy(() => import("../../src/pages/auth/NewPassword")),
);
const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp")),
);

const Settings = Loadable(
  lazy(() => import("../pages/dashboard/Settings")),
);
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
