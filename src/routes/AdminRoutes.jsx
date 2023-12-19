    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import AdminLogin from '../views/Admin/AdminLogin.jsx';
    import Dashboard from '../views/Admin/Dashboard.jsx';
    import UserManagement from '../views/Admin/UserManagement.jsx';
    import MusicUpload from '../views/Admin/MusicUpload.jsx';
    import MusicManagement from '../views/Admin/MusicManagement.jsx';
    import Reports from '../views/Admin/Reports.jsx';

    function AdminRoutes() {
    return (
        <Router>
        <Routes>
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/music-upload" element={<MusicUpload />} />
            <Route path="/music-management" element={<MusicManagement />} />
            <Route path="/reports" element={<Reports />} />
        </Routes>
        </Router>
    );
    }

    export default AdminRoutes;
