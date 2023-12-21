import { Link } from "react-router-dom";
import { GoBell } from "react-icons/go";
import { GoGear } from "react-icons/go";
import imageLogo from '../../../assets/img/logo-mood-2.png'
import './styles.scss'

function Header() {
  return (  
    <header className= 'header'>
      <img src={imageLogo} alt="logo" /> 
      <section className="interations">
        <Link className="notification">
         <GoBell />
        </Link>
        <Link  className="setting">
          <GoGear/>
        </Link>
      </section>
    </header>
  )
}

export default Header

