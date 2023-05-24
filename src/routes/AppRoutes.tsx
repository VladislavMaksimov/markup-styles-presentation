import { Navigate, Route, Routes } from "react-router";
import { ROUTES, routes } from "./routes";

export const AppRoutes = () => (
  <Routes>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))}
    <Route path="*" element={<Navigate replace to={ROUTES.NONSEMANTIC} />} />
  </Routes>
);
