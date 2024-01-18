import { Navigate, Outlet } from "react-router-dom";


function PrivatedRoutes({
    isAuthenticated, redirectPath = "/SignUp", children,
}) {
    if (!isAuthenticated) return <Navigate to={redirectPath} />;
    return <div>{children ? children : <Outlet />}</div>;
}

export default PrivatedRoutes;