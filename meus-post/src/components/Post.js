import React from 'react';
import styled from '../styles/Style.module.css';
import word from '../assets/word.png';
import pontos from '../assets/pontos.png';
import curtir from '../assets/curtir.png';
import coracao from '../assets/coracao.png';
import compartilhar from '../assets/compartilhar.png';
import comentar from '../assets/comentario.png';
import like from '../assets/like.png';

const Post = ({
  avatar,
  usuario,
  conteudo,
  banner,
  likes,
  comentario,
  compartilhamento,
  comentarios,
}) => {
  const [curtidas, setCurtidas] = React.useState(likes);
  const [comments, setComments] = React.useState(comentario);
  const [shares, setShares] = React.useState(compartilhamento);
  const [coment, setComent] = React.useState(false);
  const [newComent, setNewComent] = React.useState({});

  // FUNÇOES ////
  function likeClick() {
    setCurtidas(curtidas + 1);
  }

  function sheresClick() {
    setShares(shares + 1);
  }

  function onComments({ target }) {
    // console.log(target);
    const comentar = (
      <div>
        <form className={styled.novoComment}>
          <label></label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Escreva um comentário"
          />
        </form>

        <div>
          {comentarios.map((usuario, index) => (
            <div key={index}>
              <div className={styled.atualComment}>
                <img src={usuario.user.avatar} alt="avatar" />
                <div>
                  <div>
                    <a href="#">{usuario.user.name}</a>
                    <p>{usuario.content}</p>
                  </div>
                  <span>Curtir</span>
                  <span>Responder</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
    if (!coment) {
      return setComent(comentar);
    } else {
      return setComent(null);
    }
  }

  return (
    <section>
      <div className={styled.container}>
        <div className={styled.intro}>
          <img className={styled.avatar} src={avatar} alt="avatar" />
          <div>
            <h2>{usuario}</h2>
            <div className={styled.patrocinado}>
              <p>Patrocinado</p>
              <img src={word} alt="word" />
            </div>
          </div>
          <img className={styled.pontos} src={pontos} alt="opçoes" />
        </div>
        <p
          className={styled.conteudo}
          dangerouslySetInnerHTML={{ __html: conteudo }}
        ></p>
        <img className={styled.banner} src={banner} alt="foto-post" />
        <div className={styled.status}>
          <div className={styled.likes}>
            <img src={curtir} alt="like" />
            <img className={styled.coracao} src={coracao} alt="coracao" />
            <span>{curtidas}</span>
          </div>

          <div className={styled.shares}>
            <label htmlFor="comentar">{comments}</label>
            <input
              className={styled.comentar}
              onClick={onComments}
              type="button"
              value="comentarios"
              id="comentar"
            />

            <label htmlFor="sheres">{shares}</label>
            <input
              className={styled.comentar}
              type="button"
              value="compartilhamentos"
              id="comentar"
            />
          </div>
        </div>

        <div className={styled.acoes}>
          <div>
            <label htmlFor="like">
              <img src={like} alt="like" />
            </label>
            <input
              value="Like"
              type="button"
              id="like"
              className={styled.comentar}
              onClick={likeClick}
            />
          </div>

          <div>
            <label htmlFor="comentar">
              <img src={comentar} alt="comentar" />
            </label>
            <input
              value="Comentarios"
              type="button"
              id="comentar"
              className={styled.comentar}
              onClick={onComments}
            />
          </div>

          <div>
            <label htmlFor="sheres">
              <img src={compartilhar} alt="comentar" />
            </label>
            <input
              value="Compartilhar"
              type="button"
              id="sheres"
              className={styled.comentar}
              onClick={sheresClick}
            />
          </div>
        </div>

        <div>{coment}</div>
      </div>
    </section>
  );
};

export default Post;

// function linksAndSpace(content = '') {
//   const hasLink = content.includes('http://') || content.includes('https://');
//   if (hasLink) {
//     const contentWord = content.split(' ');
//     const changeWords = contentWord.map((_word) => {
//       const validadeContent = (word, prefix) => {
//         if (word.includes(prefix)) {
//           const before = word.substr(0, word.indexOf(prefix));
//           const cleanWord = word.replace(before, '');
//           word = `${before}<a href="${cleanWord}">${cleanWord}</a>`;
//         }
//         return word;
//       };
//       _word = validadeContent(_word, 'http://');
//       _word = validadeContent(_word, 'https://');

//       return word;
//     });
//     content = changeWords.join(' ');
//   }
//   return conteudo;
// }
