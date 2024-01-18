import { useDispatch, useSelector } from "react-redux";
import { setSongs, setSearch } from "../../../store/search/searchSlice";
import { getData  } from '../../../store/search/searchAction'
import { CiSearch } from "react-icons/ci";
import "./styles.scss";
import Navbar from "../../../components/User/Navbar/Navbar";

function Search() {
  const dispatch = useDispatch();
 /*  const searchSongs = useSelector((state) => state.search.searchsongs); */
 const search = useSelector((state) => state.search.search);

 const handleSearch = () => {
  dispatch(getData(search));
};
  
  const handleSongs = (e) => {
    dispatch(setSongs(e.target.value));
  }; 

  

  
  return (
    <main className="container-search-major">
      <header className="container-search-major-header">
        <h1>Search</h1>
        <input
          className="Search"
          type="text"
          value={search}
          onChange={handleSongs}
          placeholder="               Artists, songs, or podcast"
        />
        <CiSearch className="magnifying-glass" onClick={handleSearch} />
      </header>
      <section className="container-search-moods">
        <h3>Your main moods</h3>
        <div className="emotions">
          <button className="emotions-happy">
            <span className="alegria">Alegria</span>
          </button>
          <button className="emotions-anxiety">
            <span className="Ansiedad">Ansiedad</span>
          </button>
        </div>
      </section>
      <section className="container-search-browse">
        <h3>Browse-all</h3>
        <div className="browse">
          <button className="browse-podcast">
            <span className="podcast">podcast</span>
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
      </section>
      <Navbar />
    </main>
  );
}

export default Search;
