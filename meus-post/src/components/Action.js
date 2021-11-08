import React from 'react';
import styled from '../styles/Style.module.css';

const Action = ({ id, src, value, onClick }) => {
  return (
    <div>
      <label htmlFor={id}>
        <img src={src} />
      </label>
      <input
        type="button"
        value={value}
        className={styled.comentar}
        onClick={onClick}
      />
    </div>
  );
};

export default Action;
