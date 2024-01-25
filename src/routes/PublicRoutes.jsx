/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ isAuthenticated, redirectPath = "/home", children }) => {
  if (isAuthenticated) return <Navigate to={redirectPath} />;
  return <div>{children ? children : <Outlet />}</div>;
};

export default PublicRoutes;