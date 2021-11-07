import React from 'react';
import styled from '../styles/Style.module.css';
import proDevs from '../assets/proDevs.jpg';

const story = () => {
  return (
    <div className={styled.story}>
      <img src={proDevs} alt="" />
      <img src={proDevs} alt="" />
      <img src={proDevs} alt="" />
      <img src={proDevs} alt="" />
    </div>
  );
};

export default story;
