import { FaArrowLeft, FaEnvelope, FaUser, FaPhone, FaSmile } from 'react-icons/fa';
import logoMood from '../../../assets/img/logo-mood.png';
import './styles.scss';

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-header">
        <FaArrowLeft className="back-icon" />
        <img src={logoMood} alt="Logo" className="logo" />
      </div>

      <form className="signup-form">
        <div className="input-group">
          <FaUser className="input-icon" />
          <input type="text" placeholder="Nombre" />
        </div>

        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input type="email" placeholder="Correo electrónico" />
        </div>

        <div className="input-group">
          <FaPhone className="input-icon" />
          <input type="tel" placeholder="Número de celular" />
        </div>

        <div className="input-group">
          <FaSmile className="input-icon" />
          <input type="text" placeholder="Emoción" />
        </div>

        <button type="submit" className="signup-button">
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default SignUp;