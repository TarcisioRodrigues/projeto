import React from 'react';
import './styles.css';
import {FiArrowLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom'
export const Login = () => {
  return (
    <div className="container">
      
      <div className="content">
      <div className="Arrow">
        <Link to='/'><FiArrowLeft size={20}/></Link>
        </div>
      <h1>Faça seu Logon</h1>
        <input type="text" placeholder="Digite seu email" className="campus" />
        <input type="text" placeholder="Digite sua senha" className="campus" />
        
        <button type="submit" className="Menu">
          Entrar
        </button>
      
      </div>
    </div>
  );
};
