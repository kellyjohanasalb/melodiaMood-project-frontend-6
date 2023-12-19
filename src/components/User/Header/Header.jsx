import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineCog } from "react-icons/hi";
import { logo } from '../../../assets/logo-mood 2.png'

const Header = () => {
  return (
    <Header className= 'header'>
      <img src={logo} alt="logo" />
      <section className="interations">
        <link >
          <img src={HiOutlineBell} alt="notificaiones" />
        </link>
        <link >
          <img src={HiOutlineCog} alt="settings" />
        </link>
      </section>
    </Header>
  )
}

export default Header

