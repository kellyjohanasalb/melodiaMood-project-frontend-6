import  { useState, useEffect } from "react";
import { FaBackward } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import { FaForward } from "react-icons/fa";
/* import { CiPause1 } from "react-icons/ci"; */


function nowPlaying() {


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [audio, setAudio] = useState(null);
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const audioElement = document.querySelector('audio');
    setAudio(audioElement);
  }, []);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60),
          seconds = Math.floor(secs % 60),
          returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnSeconds}`;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const displayDuration = () => {
    const songLength = document.getElementById('SongLenght');
    songLength.innerHTML = calculateTime(audio.duration);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (audio && audio.readyState > 0) {
      displayDuration();
      const currentTime = document.getElementById('CurrentSongTime');
      currentTime.innerHTML = calculateTime(audio.currentTime);
    } else if (audio) {
      audio.addEventListener('loadedmetadata', () => {
        displayDuration();
      });
    }
  }, [audio, displayDuration]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (audio) {
      audio.ontimeupdate = function () {
        const currentTime = document.getElementById('CurrentSongTime');
        currentTime.innerHTML = calculateTime(audio.currentTime);
        setProgress();
      };
    }
  }, [audio, setProgress]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setProgress = () => {
    const percentage = (audio.currentTime / audio.duration) * 100;
    const progressBar = document.querySelector('.progress');
    progressBar.style.width = percentage + '%';
  };

  const playPause = () => {
    const playPauseButton = document.getElementById('playPause');
    if (audio.paused) {
      playPauseButton.className = 'CiPause1';
      audio.play();
    } else {
      playPauseButton.className = 'CiPlay1';
      audio.pause();
    }
  };

  const plus10= () => {
    audio.currentTime += 10;
  };

  const back10 = () => {
    audio.currentTime -= 10;
  };

  return (
    <div className="music-player-container">
    <div className="title-music-container">
        <h4 className="song-title">Father</h4>
        <span className="song-author">Diamond Eyes</span>
    </div> 
    <div className="controls-music-continer">
        <div className="progres-song-coniner">
            <div className="progress-bar">
                <span className="progress"></span>
            </div>
        </div>
        <div className="time-continer">
            <span className="time-left" id="CurrentSongTime"></span>
            <span className="time-left" id="SongLenght"></span>
        </div>
    </div>
    <audio  controls preload="metada" src="Audio.mp3"></audio>
    <div className="main-song-controls">
        <FaBackward   className="icon" onClick={back10} />
        <CiPlay1   className="icon" onClick={playPause} />
        <FaForward  className="icon" onClick={plus10} />
    </div>
  </div>
  )
}

export default nowPlaying
