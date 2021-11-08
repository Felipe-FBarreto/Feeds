import React from 'react';
import styled from '../styles/Style.module.css';
import perfil from '../assets/perfil.jpg';
import video from '../assets/video.png';
import foto from '../assets/foto.png';
import happy from '../assets/happy.png';

const NewPost = () => {
  return (
    <div className={styled.newPost}>
      <div>
        <label>
          <img src={perfil} alt="" />
        </label>
        <input type="text" placeholder="No que você está pensando, Felipe?" />
      </div>
      <div className={styled.atividades}>
        <div>
          <img src={video} />
          <span>Vídeo ao vivo</span>
        </div>
        <div>
          <img src={foto} />
          <span>Foto/vídeo</span>
        </div>
        <div>
          <img src={happy} />
          <span>Sentimento/atividade</span>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
