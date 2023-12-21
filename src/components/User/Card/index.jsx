import ImagePhoto1 from '../../../assets/img/Believer Poster.png';
import ImagePhoto2 from '../../../assets/img/Harley poster.png';
import ImagePhoto3 from '../../../assets/img/Katy Perry.png';
import ImagePhoto4 from '../../../assets/img/Maroon 5.png';
import ImagePhoto5 from '../../../assets/img/Cheap Thrills.png';
import ImagePhoto6 from '../../../assets/img/Harley poster.png';
import './styles.scss'

function Card() {
  return (
    <div className="Card-container">
      <div className="gallery-container-1 ">
        <img  src={ImagePhoto1} alt="imagen" />
        <img  src={ImagePhoto2} alt="imagen" />
        <img  src={ImagePhoto3} alt="imagen" />
        <img  src={ImagePhoto4} alt="imagen" />
        <img  src={ImagePhoto5} alt="imagen" />
        <img  src={ImagePhoto6} alt="imagen" />
      </div>
    </div>
  );
}

export default Card; 