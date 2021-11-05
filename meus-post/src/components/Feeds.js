import React from 'react';
import axios from 'axios';
import styled from '../styles/Style.module.css';
import word from '../assets/word.png';
import pontos from '../assets/pontos.png';

const Feeds = () => {
  const [dados, setDados] = React.useState([]);
  async function dadosApi() {
    try {
      const response = await axios.get(
        'https://api.npoint.io/144c46739f80c9eeb6b7',
      );
      const result = await response.data.data;
      setDados(result);
    } catch (error) {
      console.log(error);
    }
  }
  dadosApi();
  return (
    <section>
      <div className={styled.container}>
        {dados.map((dados, index) => (
          <>
            <div className={styled.intro}>
              <div className={styled.name}>
                <img
                  className={styled.avatar}
                  src={dados.user.avatar}
                  alt="avatar"
                />
                <div className={styled.user}>
                  <h2>{dados.user.name}</h2>
                  <div className={styled.patrocinio}>
                    <p>Patrocinado</p>
                    <img className={styled.word} src={word} />
                  </div>
                </div>
              </div>
              <img className={styled.pontos} src={pontos} />
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: dados.content }}
              className={styled.conteudo}
            ></p>
            <img className={styled.banner} src={dados.content_image} />
          </>
        ))}
      </div>
    </section>
  );
};

export default Feeds;
