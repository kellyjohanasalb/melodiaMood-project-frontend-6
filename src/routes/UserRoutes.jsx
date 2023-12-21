import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../views/User/Home.jsx';
import NowPlaying from '../views/User/NowPlaying/NowPlaying.jsx';
import Library from '../views/User/Library/Library.jsx';
import Search from '../views/User/Search.jsx';
import Profile from '../views/User/profile/Profile.jsx';
import Settings from '../views/User/Settings/Settings.jsx';
import SignUp from '../views/User/SignUp/SignUp.jsx';
import App from '../App.jsx';
import LoginPage from '../views/User/Login/Login.jsx';

function UserRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/now-playing" element={<NowPlaying />} />
                <Route path="/library" element={<Library />} />
                <Route path="/search" element={<Search />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default UserRoutes;
