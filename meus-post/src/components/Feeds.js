import React from 'react';
import axios from 'axios';
import Post from './Post';

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
  React.useEffect(() => {
    dadosApi();
  }, []);
  return (
    <div key={dados.id}>
      {dados.map((dados) => (
        <Post
          id={dados.id}
          avatar={dados.user.avatar}
          usuario={dados.user.name}
          conteudo={dados.content}
          banner={dados.content_image}
          likes={dados.likes}
          comentario={dados.total_comments}
          compartilhamento={dados.shares}
          comentarios={dados.comments}
        />
      ))}
    </div>
  );
};

export default Feeds;
