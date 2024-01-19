import { Link } from "react-router-dom"; 
import { IoMdHome } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import './styles.scss'

function Navbar() {
    return (
      <div className="navbar-container-Principal">
        <Link  to="/home"   className="navabr-container-principal-1 ">
         <IoMdHome className="home"/>
         <span className="ho">Home</span>
        </Link>
        <Link to="/search"  className="navabr-container-principal-2 ">
         <IoSearchOutline className="search"/>
         <span className="search-1">Search</span>
        </Link>
        <Link to="/library"  className="navabr-container-principal-3 ">
         <VscLibrary className="library"/>
         <span className="your"> your library</span>
        </Link>
      </div>
    );
  }
  
export default Navbar
