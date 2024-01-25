import { useNavigate } from 'react-router-dom'
import { FaArrowRightFromBracket } from "react-icons/fa6";
import logoMood from '../../../assets/img/logo-mood.png';
import './styles.scss';


const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="welcome-container">
      <img src={logoMood} alt="Icono" className="icon-image" />
    </div>
    <div  onClick={() => navigate('/login')} >
      <FaArrowRightFromBracket className="continuation" />
    </div>
    </>
  );
};

export default Welcome;