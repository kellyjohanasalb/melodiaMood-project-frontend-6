/* import Header from '../../../components/User/Header/Header.jsx'  */
/* import { Link } from "react-router-dom"; */
import { Link } from 'react-router-dom';
import Navbar from '../../../components/User/Navbar/Navbar';
import Card from '../../../components/User/Card'
import { FaRegBell } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import "./styles.scss";

function Home() {
  return (
    <main className="container-home ">
      <header className="contianer-header-home">
      <RxAvatar className="imgen-profile" />
      <button className='all'>Todas</button>
      <button className='Music'>Música</button>
        <section className="interations">
          <div >
            <FaRegBell className="bell" />
          </div>
          <div>
            < FaHistory className="history" />
          </div>
          <Link to="/settings" className="settings">
          <IoSettingsOutline className="settings" />
          </Link>
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
          <span>Los necesitas segun tu estado de animo</span>
          <Card />
        </div>
      </section>
      <Navbar />
    </main>

  );
}

export default Home;
