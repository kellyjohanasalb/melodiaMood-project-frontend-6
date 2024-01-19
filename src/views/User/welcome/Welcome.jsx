import { Link } from 'react-router-dom'
import { FaArrowRightFromBracket } from "react-icons/fa6";
import logoMood from '../../../assets/img/logo-mood.png';
import './styles.scss';


const Welcome = () => {
  return (
    <>
    <div className="welcome-container">
      <img src={logoMood} alt="Icono" className="icon-image" />
    </div>
    <Link to="/login" >
      <FaArrowRightFromBracket className="continuation" />
    </Link>
    </>
  );
};

export default Welcome;