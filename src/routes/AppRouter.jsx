/* import { useEffect, useState } from 'react' */
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import PublicRoutes from "./PublicRoutes.jsx";
import PrivatedRoutes from "./PrivateRoutes.jsx"; */
/* import { useDispatch, useSelector } from 'react-redux' */
import Home from "../views/User/Home/Home.jsx";
import NowPlaying from "../views/User/NowPlaying/NowPlaying.jsx";
import Library from "../views/User/Library/Library.jsx";
import Search from "../views/User/Search/Search.jsx";
import Profile from "../views/User/profile/Profile.jsx";
import Settings from "../views/User/Settings/Settings.jsx";
import SignUp from "../views/User/SignUp/SignUp.jsx";
import LoginPage from "../views/User/Login/Login.jsx";
import AdminLogin from "../views/Admin/AdminLogin.jsx";
import Dashboard from "../views/Admin/Dashboard.jsx";
import UserManagement from "../views/Admin/UserManagement.jsx";
import MusicUpload from "../views/Admin/MusicUpload.jsx";
import MusicManagement from "../views/Admin/MusicManagement.jsx";
import Reports from "../views/Admin/Reports.jsx";
import Welcome from "../views/User/welcome/Welcome.jsx";

function AppRouter() {
  /* const { isAuthenticated, user} = useSelector( store => store.user ) */
 /*  const [checking, setChecking] = useState(true)
  const dispatch = useDispatch() */


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
         <Route>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/now-playing" element={<NowPlaying />} />
            <Route path="/library" element={<Library />} />
            <Route path="/search" element={<Search />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route >
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/music-upload" element={<MusicUpload />} />
            <Route path="/music-management" element={<MusicManagement />} />
            <Route path="/reports" element={<Reports />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
