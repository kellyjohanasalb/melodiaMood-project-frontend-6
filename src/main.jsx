import React from 'react';
import ReactDOM from 'react-dom/client';
import UserRoutes from './routes/UserRoutes.jsx';
import AdminRoutes from './routes/AdminRoutes.jsx';
import 'styles/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserRoutes />
    <AdminRoutes />
  </React.StrictMode>
);
