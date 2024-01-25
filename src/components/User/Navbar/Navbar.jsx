import { useNavigate } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import './styles.scss'


function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="footer-container-Principal">
      <div className="footer-container-principal-1" onClick={() => navigate('/home')}>
        <IoMdHome className="home" />
        <span className="ho">Home</span>
      </div>
      <div className="footer-container-principal-2" onClick={() => navigate('/search')}>
        <IoSearchOutline className="search" />
        <span className="search-1">Search</span>
      </div>
      <div className="footer-container-principal-3" onClick={() => navigate('/library')}>
        <VscLibrary className="library" />
        <span className="your"> your library</span>
      </div>
    </div>
  );
}

export default Navbar;