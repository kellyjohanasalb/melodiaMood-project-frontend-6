import { FaPhone, FaGoogle } from 'react-icons/fa';
import logoMood from '../../../assets/logo-mood.png';
import './styles.scss'; 

const LoginPage = () => {
    return (
    <div className="login-container">
        <img src={logoMood} alt="Logo" className="logo" />

        <button className="login-button">
        <FaPhone /> Iniciar sesión con número de celular
        </button>

        <button className="login-button">
        <FaGoogle /> Iniciar sesión con Google
        </button>

        <a href="#" className="register-link">
        Regístrate
        </a>
    </div>
    );
};

export default LoginPage;