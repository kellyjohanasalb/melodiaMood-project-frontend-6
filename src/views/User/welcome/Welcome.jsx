import './styles.scss';
import logoMood from '../../../assets/img/logo-mood.png';

const Welcome = () => {
  return (
    <div className="Welcome-container">
      <img src={logoMood} alt="Icono" className="icon-image" />
    </div>
  );
};

export default Welcome;