/* import Header from '../../../components/User/Header/Header.jsx'  */
/* import { Link } from "react-router-dom"; */
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../components/User/Navbar/Navbar';
import Card from '../../../components/User/Card'
import { FaRegBell } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { getSongs } from '../../../store/songs/songsAction';
import { useEffect } from 'react';
import "./styles.scss";

function Home() {
const navigate = useNavigate();
const dispatch = useDispatch()
const songs = useSelector((store) => store.songs.songs);
console.log("songs", songs)

useEffect(()=>{
  console.log("entro al home")
  dispatch(getSongs())
}, [])

  return (
    <main className="container-home ">
      <header className="contianer-header-home">
      <div  className="imgen-profile-icon"  onClick={() => navigate('/profile')}>
      <RxAvatar className="imgen-profile" />
      </div>
      <button className='all'>Todas</button>
      <button className='Music'>Música</button>
        <section className="interations">
          <div >
            <FaRegBell className="bell" />
          </div>
          <div>
            < FaHistory className="history" />
          </div>
          <div  className="settings" onClick={() => navigate('/settings')}>
          <IoSettingsOutline className="settings" />
          </div>
        </section>
      </header>
      <section className="container-home-body">
        <div className="container-home-body-1">
          <span>Los recomendados para tus estados de animo</span>
          
            <Card song={songs} /> 
          
        </div>
      </section>
      <Navbar />
    </main>

  );
}

export default Home;
