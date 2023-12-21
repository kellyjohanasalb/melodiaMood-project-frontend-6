import { IoMdHome } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import './styles.scss'

function Navbar() {
    return (
      <div className="navbar-container-Principal">
        <div className="navabr-container-principal-1 ">
         <IoMdHome className="home"/>
         <span className="ho">Home</span>
        </div>
        <div className="navabr-container-principal-2 ">
         <IoSearchOutline className="search"/>
         <span className="search-1">Search</span>
        </div>
        <div className="navabr-container-principal-3 ">
         <VscLibrary className="library"/>
         <span className="your"> your library</span>
        </div>
      </div>
    );
  }
  
export default Navbar
