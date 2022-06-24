import React from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom'
import './styles.css'
import Img from '../../assets/Avatar-none.png';
export const Register = () => {
  return (
    <div className="container">
      <div className="content">
      <div className="Arrow">
        <Link to='/'><FiArrowLeft size={20}/></Link>
        </div>
        <div className="titulo">
      
          <h1>Faça seu Cadastro</h1>
          <section>
            <img src={Img} alt="None" className="images" />
              <p>Perfil</p>
          </section>
        </div>
        <form action="">
          <div className='group'>
            <input type="text" placeholder="Digite seu nome" className="campus" />
          <input type="text" placeholder="Digite seu CNPJ" className="campus" /></div>
          <div className='group'><input
            type="text"
            placeholder="Digite da empresa"
            className="campus"
          />
          <input
            type="text"
            placeholder="Digite seu segmento"
            className="campus"
          /></div>
      <div className='group'>    <input
            type="text"
            placeholder="Digite seu contato"
            className="campus"
          />
          <input
            type="text"
            placeholder="Digite sua senha"
            className="campus"
          /></div>
       <div className='group3'> 
           
          <button type="submit" className="Menu">
            Registrar
          </button></div>
        </form>
      </div>
    </div>
  );
};
