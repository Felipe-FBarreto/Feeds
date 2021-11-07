import React from 'react';
import styled from '../styles/Style.module.css';
import logo from '../assets/logo.svg';
import lupa from '../assets/lupa.png';
import home from '../assets/home.png';
import watch from '../assets/watch.png';
import grupo from '../assets/grupo.png';
import menu from '../assets/menu.png';
import messenger from '../assets/messenger.png';
import notificacao from '../assets/notificacao.png';
import conta from '../assets/conta.png';

const Header = () => {
  return (
    <header>
      <div>
        {' '}
        <img className={styled.logo} src={logo} alt="logo" />
        <div className={styled.pesquisar}>
          <label className={styled.search}>
            <img src={lupa} alt="lupa" />
            <input type="search" placeholder="Pesquisar no Facebook" />
          </label>
        </div>
      </div>
      <div className={styled.home}>
        <img src={home} alt="home" />
        <img src={watch} alt="watch" />
        <img src={grupo} alt="grupo" />
      </div>
      <div className={styled.conta}>
        <img src={menu} alt="menu" />
        <img src={messenger} alt="messenger" />
        <img src={notificacao} alt="notificacao" />
        <img src={conta} alt="conta" />
      </div>
    </header>
  );
};

export default Header;
