import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../../../store/users/userThunks";
import { FaArrowLeft, FaSignOutAlt } from "react-icons/fa";
import "./styles.scss";

const Settings = () => {
  const dispatch = useDispatch();
  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Configuración</h1>
      </div>
      <Link to="/home" className="settings-header-back-icon">
        <FaArrowLeft className="back-icon" />
      </Link>
      <div className="settings-content">
        <div className="settings-section">
          <h2>Perfil del Usuario</h2>
          <div className="setting-item">
            <p>Cambiar foto de perfil</p>
          </div>
          <div className="setting-item">
            <p>Editar nombre de usuario</p>
          </div>
          <div className="setting-item">
            <p>Cambiar contraseña</p>
          </div>
        </div>

        <div className="settings-section">
          <h2>Notificaciones</h2>
          <div className="setting-item">
            <p>Configuración de notificaciones</p>
          </div>
          <div className="setting-item">
            <p>Configuración de sonido de notificaciones</p>
          </div>
        </div>

        {/* Agrega otras secciones y configuraciones según sea necesario */}
      </div>

      <button className="logout-button" onClick={() => dispatch(logoutAsync())}>
        <FaSignOutAlt /> Cerrar Sesión
      </button>
    </div>
  );
};

export default Settings;
