import React from 'react';
import styled from '../styles/Style.module.css';
import word from '../assets/word.png';
import pontos from '../assets/pontos.png';
import curtir from '../assets/curtir.png';
import coracao from '../assets/coracao.png';
import perfil from '../assets/perfil.jpg';
import compartilhar from '../assets/compartilhar.png';
import comentar from '../assets/comentario.png';
import like from '../assets/like.png';
import Action from './Action';

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

  function wrapLine(content) {
    const wrap = content.split('<br />').join('<br/><br/>');
    return wrap;
  }
  function likeClick() {
    setCurtidas(curtidas + 1);
  }

  function sheresClick() {
    setShares(shares + 1);
  }

  function onComments() {
    const comentar = (
      <div>
        <form className={styled.novoComment}>
          <label>
            <img className={styled.perfil} src={perfil} alt="perfil" />
          </label>
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
          dangerouslySetInnerHTML={{ __html: wrapLine(conteudo) }}
        ></p>
        <img className={styled.banner} src={banner} alt="foto-post" />
        <div className={styled.status}>
          <div className={styled.likes}>
            <img className={styled.curtir} src={curtir} alt="like" />
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
          <Action id="like" src={like} value="like" onClick={likeClick} />

          <Action
            id="comentar"
            src={comentar}
            value="Comentar"
            onClick={onComments}
          />

          <Action
            id="sheres"
            src={compartilhar}
            value="Compartilhar"
            onClick={sheresClick}
          />
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
