import { Link } from 'react-router-dom';
import './styles.scss'

// eslint-disable-next-line react/prop-types
function Card({song}) {
  return (
    <div className="Card-container">
      <div className="gallery-container-1 ">
        { song.map(s =>
          <Link to={"../now-playing/"+s.id} target="_blank" key={s.id}>
            <img src={s["post-album"]} /> 
          </Link>
          )
        }
      </div>
    </div>
  );
}

export default Card; 