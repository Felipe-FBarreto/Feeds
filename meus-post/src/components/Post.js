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
  const [coment, setComent] = React.useState();

  // FUNÇOES ////
  function linksAndSpace(content = '') {
    const hasLink = content.includes('http://') || content.includes('https://');
    if (hasLink) {
      const contentWord = content.split(' ');
      const changeWords = contentWord.map((_word) => {
        const validadeContent = (word, prefix) => {
          if (word.includes(prefix)) {
            const before = word.substr(0, word.indexOf(prefix));
            const cleanWord = word.replace(before, '');
            word = `${before}<a href="${cleanWord}">${cleanWord}</a>`;
          }
          return word;
        };
        _word = validadeContent(_word, 'http://');
        _word = validadeContent(_word, 'https://');

        return word;
      });
      content = changeWords.join(' ');
    }
    return conteudo;
  }

  function likeClick() {
    setCurtidas(curtidas + 1);
  }

  function sheresClick() {
    setShares(shares + 1);
  }

  function onComments() {
    const comentar = comentarios.map((usuario) => (
      <div>
        <input type="text" name="" id="" />
        <img src={usuario.user.avatar} alt="avatar" />
        <h4>{usuario.user.name}</h4>
        <p>{usuario.content}</p>
      </div>
    ));

    return setComent(comentar);
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
          dangerouslySetInnerHTML={{ __html: linksAndSpace(conteudo) }}
        ></p>
        <img className={styled.banner} src={banner} alt="foto-post" />
        <div className={styled.status}>
          <div className={styled.likes}>
            <img src={curtir} alt="like" />
            <img className={styled.coracao} src={coracao} alt="coracao" />
            <span>{curtidas}</span>
          </div>
          <div className={styled.shares}>
            <span>{comments} Comentários</span>
            <span>{shares} compartilhamentos</span>
          </div>
        </div>
        <div className={styled.acoes}>
          <div onClick={likeClick}>
            <img src={like} />
            <button>Like</button>
          </div>
          <div onClick={onComments}>
            <img src={comentar} />
            <button>Comentários</button>
          </div>
          <div onClick={sheresClick}>
            <img src={compartilhar} />
            <button>Compartilhar</button>
          </div>
        </div>
        <div>{coment}</div>
      </div>
    </section>
  );
};

export default Post;
