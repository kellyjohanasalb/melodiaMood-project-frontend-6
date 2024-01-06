    import { FaPhone, FaGoogle } from 'react-icons/fa';
    import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
    import { auth } from '../../../firebase/firebaseConfig';
    import { useNavigate } from 'react-router-dom';
    import logoMood from '../../../assets/img/logo-mood.png';
    import './styles.scss';

    const LoginPage = () => {
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        console.log('Inicio de sesión con Google exitoso');
    
        navigate('/home');
        } catch (error) {
        console.error('Error al iniciar sesión con Google', error.message);
        }
    };

    return (
        <div className="login-container">
        <img src={logoMood} alt="Logo" className="logo" />

        <button className="login-button">
            <FaPhone /> Iniciar sesión con número de celular
        </button>

        <button className="login-button" onClick={handleGoogleLogin}>
            <FaGoogle /> Iniciar sesión con Google
        </button>

        <a href="#" className="register-link">
            Regístrate
        </a>
        </div>
    );
    };

    export default LoginPage;
