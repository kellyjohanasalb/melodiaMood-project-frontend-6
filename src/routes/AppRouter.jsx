import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivatedRoutes from "./PrivateRoutes.jsx";
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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig.js";
import { setIsAuthenticate, setUser } from "../store/users/userSlice.js";

function AppRouter() {
  const {isAuthenticate, user } = useSelector(store=>store.user)
  const dispatch = useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth, (userLogged) => {
      console.log("userLogged", userLogged)
      console.log("user store", user)
      if (userLogged) {
        dispatch(setIsAuthenticate(true));
        dispatch(setUser({ email: userLogged.email, id: userLogged.uid, name: userLogged.name, photoURL: userLogged.photoURL, accessToken: userLogged.accessToken }))
      }
    });
  },[])

 return (
  <BrowserRouter>
    <Routes>
      <Route path="/">
      {/*   <PublicRoutes isAuthenticated={isAuthenticated} redirectPath="/home"> */}
          
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUp />} />
         
       {/*  </PublicRoutes> */}
        {/* <PrivatedRoutes isAuthenticated={isAuthenticated} redirectPath="/login"> */}
          <Route element={<PrivatedRoutes isAuthenticate={isAuthenticate} />}>
            <Route path="/now-playing/:idSong" element={<NowPlaying />} />
            <Route path="/home" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/music-upload" element={<MusicUpload />} />
            <Route path="/music-management" element={<MusicManagement />} />
            <Route path="/reports" element={<Reports />} />
          </Route>
     {/*    </PrivatedRoutes> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
}

export default AppRouter;