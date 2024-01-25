import { Navigate, Outlet } from "react-router-dom";


function PrivatedRoutes({
    // eslint-disable-next-line react/prop-types
    isAuthenticated, redirectPath = "/sign-Up", children,
}) {
    if (!isAuthenticated) return <Navigate to={redirectPath} />;
    return <div>{children ? children : <Outlet />}</div>;
}

export default PrivatedRoutes;