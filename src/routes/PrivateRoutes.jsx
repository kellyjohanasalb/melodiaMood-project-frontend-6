
import { Navigate, Outlet } from "react-router-dom";


function PrivatedRoutes( {isAuthenticate}) {
        console.log("is autenticate", isAuthenticate)

        return !isAuthenticate ? <Navigate to={'/login'} /> : <Outlet />
    
}

export default PrivatedRoutes;