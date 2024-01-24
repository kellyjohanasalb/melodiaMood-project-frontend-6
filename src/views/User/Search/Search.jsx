import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
// import { setSongs, setSearch } from "../../../store/songs/songsSlice";
import {
  searchSongsAction,
  filteredSongsActions,
} from "../../../store/songs/songsAction";
import { CiSearch } from "react-icons/ci";
import "./styles.scss";
import Navbar from "../../../components/User/Navbar/Navbar";


function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSerchTerm] = useState("");
  const [showResponseSearch, setShowResponseSearch] = useState(false);
  /*  const searchSongs = useSelector((state) => state.search.searchsongs); */
  const search = useSelector((state) => state.songs.search);

  const handleSearch = () => {
    console.log(searchTerm);
    if (searchTerm) {
      dispatch(searchSongsAction(searchTerm));
      setShowResponseSearch(false);
    } else {
      setShowResponseSearch(true);
     
    }
  };

  const handleInputSearch = (e) => {
    setSerchTerm(e.target.value);
    if (e.target.value > 6) {
      dispatch(searchSongsAction(e.target.value));
      setShowResponseSearch(false);
    } else {
      setShowResponseSearch(true);
    }
  };

  const handleMoodSearch = (searchParam, searchValue) => {
    if (searchValue) {
      dispatch(filteredSongsActions(searchParam, searchValue));
      setShowResponseSearch(false);
    } else {
      setShowResponseSearch(true);
    }
  };

  const handlePlaySong = (idSong) =>{
    navigate(`/now-playing/${idSong}`);
  }

  return (
    <main className="container-search-major">
      <header className="container-search-major-header ">
        <h1>Search</h1>
        <input
          className="Search"
          type="text"
          value={searchTerm}
          onChange={handleInputSearch}
          placeholder=" Artists, songs, or podcast hey    "
        />
        <CiSearch className="magnifying-glass" onClick={handleSearch} />
        <div className="results-nofund">
          {showResponseSearch && <h3>No se encontraron resultados</h3>}
        </div>
      </header>
        {search.length > 0 && !showResponseSearch ?(
      <section className="Section-songs">
          <ul className="ul">
            {search.map((item) => (
              <li key={item.id} onClick={()=>handlePlaySong(item.id)}>{item.songName} </li>
            ))}
          </ul>
      </section>
        ) : (
          <div></div>
        )}
      <section className="container-search-moods">
        <h3>Your main moods</h3>
        <div className="emotions">
          <button
            className="emotions-happy"
            onClick={() => handleMoodSearch("songEmotion", "alegria")}
          >
            ALEGRIA
          </button>
          <button
            className="emotions-anxiety"
            onClick={() => handleMoodSearch("songEmotion", "ansiedad")}
          >
            ANSIEDAD
          </button>
          <button
            className="emotions-sadness"
            onClick={() => handleMoodSearch("songEmotion", "tristeza")}
          >
            TRISTEZA
          </button>
          <button
            className="emotions-fear"
            onClick={() => handleMoodSearch("songEmotion", "miedo")}
          >
            MIEDO
          </button>
          <button
            className="emotions-anger"
            onClick={() => handleMoodSearch("songEmotion", "enojo")}
          >
            ENOJO
          </button>
        </div>
      </section>
      <section className="container-search-browse">
        <h3>Browse-all</h3>
        <div className="browse">
          <button className="browse-podcast">
            <span className="podcast">Podcast</span>
          </button>
          <button className="new-realse">
            <span className="new">New Releases</span>
          </button>
        </div>
        <div className="container-browse">
          <button className="new-emotions">
            <span className="emo">New Emotions</span>
          </button>
          <button className="for-you">
            <span className="you">Made for you</span>
          </button>
        </div>
        <div className="conatiner-minor">
          <button className="calm-minor">
            <span className="calm">Calm state</span>
          </button>
          <button className="home">
            <span className="at">At Home</span>
          </button>
        </div>
        <Navbar />
      </section>
    </main>
  );
}

export default Search;
