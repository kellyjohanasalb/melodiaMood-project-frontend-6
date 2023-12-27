/* import Header from '../../../components/User/Header/Header.jsx'  */
/* import { Link } from "react-router-dom"; */
import Navbar from '../../../components/User/Navbar/Navbar';
import Card from '../../../components/User/Card'
import { FaRegBell } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import ImageLogo from "../../../assets/img/logo-mood-2.png";
import "./styles.scss";

function Home() {
  return (
    <main className="container-home bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700">
      <header className="contianer-header-home">
        <img src={ImageLogo} alt="logo" />
        <section className="interations">
          <div >
            <FaRegBell className="bell" />
          </div>
          <div>
            < FaHistory className="history" />
          </div>
          <div>
            <IoSettingsOutline className="settings" />
          </div>
        </section>
      </header>
      <section className="container-home-body">
        <div className="container-home-body-1">
          <span>Los recomendados para tus estados de animo</span>
          <Card />
        </div>
        <div  className="container-home-body-2">
          <span>Los mas escuchado segun tu estado de animo</span>
          <Card />
        </div>
        <div  className="container-home-body-3">
          <span>Los neesitasd segun tu estado de animo</span>
          <Card />
        </div>
      </section>
      <Navbar />
    </main>

  );
}

export default Home;
