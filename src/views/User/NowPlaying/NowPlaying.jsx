
import {  AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import {  BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons";
import { FaRegHeart } from "react-icons/fa6";

import './NowPlaying.scss';

function NowPlaying() {
    return (
    <div className="component">
        <div className="song-description">
            <IconContext.Provider value={{ size: "3em", color: "#FFF" }}>
                <IoIosArrowDown />
            </IconContext.Provider>
            <h2>Playing Now</h2>
            <IconContext.Provider value={{ size: "3em", color: "#FFF" }}>
                < BsThreeDotsVertical />
            </IconContext.Provider>
        </div>
      <img
        className="musicCover"
        src="https://picsum.photos/200/200"
      />

      <div className="song-info">
        <div className="song-info-title">
            <h3 className="title">Rubaiyyan</h3>
            <IconContext.Provider value={{ size: "4em", color: "#FFF" }}>
                    < FaRegHeart />
            </IconContext.Provider>
        </div>
        <p className="subTitle">Qala</p>
      </div>
      
      <div>
        <button className="playButton">
          <IconContext.Provider value={{ size: "4em", color: "#FFF" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
          <button className="playButton">
            <IconContext.Provider value={{ size: "4em", color: "#FFF" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        <button className="playButton">
          <IconContext.Provider value={{ size: "4em", color: "#FFF" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
    );
}

export default NowPlaying;
