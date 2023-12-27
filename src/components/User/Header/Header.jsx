import { Link } from 'react-router-dom'
import Bell from '../../../assets/iconos/bell 1.png'
import History from '../../../assets/iconos/history.png'
import Setting from '../../../assets/iconos/setting 1.png'
import imageLogo from "../../../assets/img/logo-mood-2.png";
import "./styles.scss";

function Header() {
  return (
    <header className="header">
      <img src={imageLogo} alt="logo" />
      <section className="interations">
        <Link className="bell">
          <img src={Bell} alt="notificacion" />
        </Link>
        <Link className="history">
          <img src={History} alt="historia" />
        </Link>
        <Link className="settings">
          <img src={Setting} alt="configuracion" />
        </Link>
      </section>
    </header>
  );
}

export default Header;
