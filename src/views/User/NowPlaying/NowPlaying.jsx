import { useState, useEffect } from "react";
import { AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
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
  console.log(idSong);
  const dispatch = useDispatch();
  const songs = useSelector((store) => store.songs.songs);
  const [audio, setAudio] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    dispatch(getSongs()); // Llama a la acción para obtener las canciones
  }, [dispatch]);

  useEffect(() => {
    // Encuentra la canción actual por ID
    const foundSong = songs.find((song) => song.id === idSong);
    setCurrentSong(foundSong);

    // Configuración del reproductor de música
    const audioElement = document.querySelector("audio");
    setAudio(audioElement);
  }, [idSong, songs]);

  useEffect(() => {
    const setProgress = () => {
      if (audio) {
        const percentage = (audio.currentTime / audio.duration) * 100;
        const progressBar = document.querySelector(".progress");
        progressBar.style.width = percentage + "%";
      }
    };
    const displayDuration = () => {
      if (audio && audio.readyState > 0) {
        const songLength = document.getElementById("SongLenght");
        songLength.innerHTML = calculateTime(audio.duration);
      }
    };

    const updateCurrentTime = () => {
      if (audio) {
        const currentTime = document.getElementById("CurrentSongTime");
        currentTime.innerHTML = calculateTime(audio.currentTime);
        setProgress();
      }
    };
    if (audio) {
      // Configuración de eventos y funciones del reproductor de música
      audio.addEventListener("loadedmetadata", displayDuration);
      audio.ontimeupdate = updateCurrentTime;
    }
  }, [audio]);

  

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60),
      seconds = Math.floor(secs % 60),
      returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnSeconds}`;
  };

  

  const playPause = () => {
    if (audio) {
      const playPauseButton = document.getElementById("playPause");
      if (audio.paused) {
        playPauseButton.className = "CiPause1";
        audio.play();
      } else {
        playPauseButton.className = "CiPlay1";
        audio.pause();
      }
    }
  };

  const plus10 = () => {
    if (audio) {
      audio.currentTime += 10;
    }
  };

  const back10 = () => {
    if (audio) {
      audio.currentTime -= 10;
    }
  };

  return (
    <div className="component">
      <div className="song-description">
        <IconContext.Provider value={{ size: "3em", color: "#FFF" }}>
          <IoIosArrowDown />
        </IconContext.Provider>
        <h2>Playing Now</h2>
        <IconContext.Provider value={{ size: "3em", color: "#FFF" }}>
          <BsThreeDotsVertical />
        </IconContext.Provider>
      </div>
      <img className="musicCover" src="https://picsum.photos/200/200" />

      <div className="song-info">
        <div className="song-info-title">
          <h3 className="title">{currentSong?.songName}</h3>
          <p className="artist">{currentSong?.artist}</p>
          <p className="postAlbum">{currentSong?.postAlbum}</p>
          <p className="songColor">{currentSong?.songColor}</p>
          <IconContext.Provider value={{ size: "4em", color: "#FFF" }}>
            <FaRegHeart />
          </IconContext.Provider>
        </div>
        <p className="subTitle"></p>
      </div>

      <div>
        <button className="playButton" onClick={plus10}>
          <IconContext.Provider value={{ size: "4em", color: "#FFF" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        <button className="playButton" onClick={playPause}>
          <IconContext.Provider value={{ size: "4em", color: "#FFF" }}>
            <AiFillPauseCircle id="playPause" />
          </IconContext.Provider>
        </button>
        <button className="playButton" onClick={back10}>
          <IconContext.Provider value={{ size: "4em", color: "#FFF" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

export default NowPlaying;
