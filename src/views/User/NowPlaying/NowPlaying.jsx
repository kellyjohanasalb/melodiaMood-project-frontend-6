import { useState, useEffect, useRef } from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons";
import { FaRegHeart } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../../../store/songs/songsAction";
import "./NowPlaying.scss";

function NowPlaying() {
  const { idSong } = useParams();
 /*  console.log(idSong); */
  const dispatch = useDispatch();
  const songs = useSelector((store) => store.songs.songs);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); 
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    dispatch(getSongs()); // Llama a la acción para obtener las canciones
  }, [dispatch]);

  useEffect(() => {
    // Encuentra la canción actual por ID
    const foundSong = songs.find((song) => song.id === idSong);
    setCurrentSong(foundSong);

      const tagComponent = document.getElementById("component")
      switch (currentSong?.songEmotion) {
        case "tristeza":
          tagComponent.style.background = "#2E6AF3"; // Puedes cambiar el color según tus preferencias
          break;
        case "alegria":
          tagComponent.style.background = "#F4F955";
          break;
        case "miedo":
          tagComponent.style.background = "#8F3B96";
          break;
        case "enojo":
          tagComponent.style.background = "#D71C09";
          break;
        case "ansiedad":
          tagComponent.style.background = "#62BC87";
          break;
        default:
          // En caso de que la emoción no sea ninguna de las anteriores, puedes establecer un color predeterminado.
          tagComponent.style.background = "#FFFFFF";
      }
      
   
  }, [idSong, songs]);

  console.log(currentSong);
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60),
          seconds = Math.floor(secs % 60),
          returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnSeconds}`;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const displayDuration = () => {
    const songLength = document.getElementById('SongLenght');
    songLength.innerHTML = calculateTime(audioRef.current.duration);
  };

  useEffect(() => {
    if (audioRef.current && audioRef.current.readyState > 0) {
      displayDuration();
      const currentTime = document.getElementById('CurrentSongTime');
      currentTime.innerHTML = calculateTime(audioRef.current.currentTime);
    } else if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', () => {
        displayDuration();
      });
    }
  }, [audioRef, displayDuration]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.ontimeupdate = function () {
        const currentTime = document.getElementById('CurrentSongTime');
        currentTime.innerHTML = calculateTime(audioRef.current.currentTime);
        setProgress();
      };
    }
  }, [audioRef]);

  const setProgress = () => {
    const percentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    const progressBar = document.querySelector('.progress');
    progressBar.style.width = percentage + '%';
  };

 /*  const playPause = () => {
    const playPauseButton = document.getElementById('playPause');
    if (audioRef.current.paused) {
      playPauseButton.className = <AiFillPauseCircle />;
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      playPauseButton.className = <AiFillPlayCircle />;
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }; */

  const playPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play(songs);
        setIsPlaying(true);
      } else {
        audioRef.current.pause(songs);
        setIsPlaying(false);
      }
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 20; // Adelanta 10 segundos
    }
  };
  
  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 20; // Retrocede 10 segundos
    }
  };



  return (
    <div className="component" id="component">
      <div className="song-description">
        <IconContext.Provider value={{ size: "3em", color: "#FFF" }}>
          <IoIosArrowDown />
        </IconContext.Provider>
        <h2>Playing Now</h2>
        <IconContext.Provider value={{ size: "3em", color: "#FFF" }}>
          <BsThreeDotsVertical />
        </IconContext.Provider>
      </div>
      {currentSong?<img className="musicCover" src={currentSong["post-album"]} />:null}
     {/*  <img className="musicCover" src={currentSong["post-album"]} /> */}

      <div className="song-info">
        <div className="song-info-title">
          <h3 className="title">{currentSong?.songName}</h3>
  
          <IconContext.Provider value={{ size: "4em", color: "#FFF" }}>
            <FaRegHeart />
          </IconContext.Provider>
        </div>
        <p className="artist">{currentSong?.artist}</p>
      </div>

      <div>
        <button className="playButton" onClick={skipBackward} >
          <IconContext.Provider value={{ size: "4em", color: "#FFF" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
         <button className="playButton" onClick={playPause}>
          <IconContext.Provider value={{ size: "4em", color: "#FFF" }}>
            {isPlaying ? (
              <AiFillPauseCircle id="playPause" />
            ) : (
              <AiFillPlayCircle id="playPause" />
            )}
          </IconContext.Provider>
        </button> 
        <button className="playButton"  onClick={skipForward} >
          <IconContext.Provider value={{ size: "4em", color: "#FFF" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
      <div className="song-time">
        <span id="CurrentSongTime">0:00</span>
        <div className="progress"></div>
        <span id="SongLenght">0:00</span>
      </div>
      <audio ref={audioRef} src={currentSong?.song} />
    </div>
  );
}

export default NowPlaying;
