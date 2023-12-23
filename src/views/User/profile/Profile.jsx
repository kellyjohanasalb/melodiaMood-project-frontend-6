// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Profile.scss'; // Asegúrate de tener este archivo en la misma carpeta

function Profile() {
  return (
    <section className="main">
      <div className="profile-card">
        <div className='profile-info'>
          <div className="image">
              <img
              className="profile-pic"
              src="https://picsum.photos/200/200"/>
          </div>
          <div className="data">
          <h2>Olivia Gomez</h2>
          <span>Developer & Designer</span>
          <div className="row">
          <div className="info">
            <h3>Following</h3>
            <span>120</span>
          </div>
          <div className="info">
            <h3>Followers</h3>
            <span>5000</span>
          </div>
        </div>
        </div>
        </div>
        <div className="buttons">
          <a href="#" className="btn">Editar</a>
          <a href="#" className="btn">Follow Me</a>
        </div>
        <div className='playlist colum'>
          <div className='playlist-element'>
            <div className="image">
                <img
                className="playlist-pic"
                src="https://picsum.photos/200/200"/>
            </div>
            <div className="info">
              <h3 className='playlist-name'>Reggueton</h3>
              <span>Se guardó 0 veces</span>
            </div>
          </div>
          <div className='playlist-element'>
            <div className="image">
                <img
                className="playlist-pic"
                src="https://picsum.photos/200/200"/>
            </div>
            <div className="info">
              <h3 className='playlist-name'>Salsa</h3>
              <span>Se guardó 0 veces</span>
            </div>
          </div>
          <div className='playlist-element'>
            <div className="image">
                <img
                className="playlist-pic"
                src="https://picsum.photos/200/200"/>
            </div>
            <div className="info">
              <h3 className='playlist-name'>Bachata</h3>
              <span>Se guardó 0 veces</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
