
import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaPlay,
  FaPlus,
  FaEllipsisH,
  FaArrowLeft,
} from "react-icons/fa";

import "./styles.scss";

const Library = () => {
  const navigate = useNavigate();

  return (
    <div className="library-container">
      <div className="library-header" onClick={() => navigate('/home')}>
        <FaArrowLeft className="back-icon" />
      </div>
      <div className="library-header-mylibrary">
        <h1>Mi Biblioteca</h1>
      </div>
      <div className="library-section">
        <h2>Canciones Favoritas</h2>
        {/* Listado de canciones favoritas */}
        <div className="song-item">
          <FaHeart className="icon heart" />
          <p>Nombre de la canción</p>
          <FaPlay className="icon play" />
          <FaEllipsisH className="icon ellipsis" />
        </div>
        {/* Agrega más elementos según sea necesario */}
      </div>

      <div className="library-section">
        <h2>Álbumes Guardados</h2>
        {/* Listado de álbumes guardados */}
        <div className="album-item">
          <img src="url_del_album" alt="Álbum" />
          <p>Nombre del Álbum</p>
          <FaPlay className="icon play" />
          <FaEllipsisH className="icon ellipsis" />
        </div>
        {/* Agrega más elementos según sea necesario */}
      </div>

      <div className="library-section">
        <h2>Listas de Reproducción</h2>
        {/* Listado de listas de reproducción creadas por el usuario */}
        <div className="playlist-item">
          <img src="url_de_la_lista" alt="Lista de Reproducción" />
          <p>Nombre de la Lista</p>
          <FaPlay className="icon play" />
          <FaPlus className="icon plus" />
          <FaEllipsisH className="icon ellipsis" />
        </div>
        {/* Agrega más elementos según sea necesario */}
      </div>
    
    </div>
  );
};

export default Library;
