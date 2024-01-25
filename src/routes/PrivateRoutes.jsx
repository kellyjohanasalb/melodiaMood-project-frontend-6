
import { Navigate, Outlet } from "react-router-dom";


function PrivatedRoutes( isAuthenticate) {

        return !isAuthenticate ? <Navigate to={'/login'} /> : <Outlet />
    
}

export default PrivatedRoutes;