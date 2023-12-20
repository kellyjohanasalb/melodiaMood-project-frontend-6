import './styles/App.scss';
import logoMood from './assets/logo-mood.png';

const App = () => {
  return (
    <div className="app-container">
      <img src={logoMood} alt="Icono" className="icon-image" />
    </div>
  );
};

export default App;