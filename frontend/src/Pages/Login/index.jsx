import React from 'react';
import './styles.css';
export const Login = () => {
  return (
    <div className="container">
      <h1>Faça seu Logon</h1>
      <div className="wrapper">
        <input type="text" placeholder="Digite seu email" className="campus" />
        <input type="text" placeholder="Digite sua senha" className="campus" />
        <button type="submit" className="Menu">
          Entrar
        </button>
      </div>
    </div>
  );
};
