import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/';
import './styles.css';
import Img from '../../assets/Avatar-none.png';
export const Register = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="titulo">
          <h1>Faça seu Cadastro</h1>
          <section>
            <img src={Img} alt="None" className="images" />
            <AiOutlinePlusCircle />
          </section>
        </div>
        <form action="">
          <input type="text" placeholder="Digite seu nome" className="campus" />
          <input type="text" placeholder="Digite seu CNPJ" className="campus" />
          <input
            type="text"
            placeholder="Digite da empresa"
            className="campus"
          />
          <input
            type="text"
            placeholder="Digite seu segmento"
            className="campus"
          />
          <input
            type="text"
            placeholder="Digite seu contato"
            className="campus"
          />
          <input
            type="text"
            placeholder="Digite sua senha"
            className="campus"
          />
          <select className="opcao">
            <option value=""></option>
            <option value="Administrador">Administrador</option>
            <option value="Usuario">Usuario</option>
          </select>
          <button type="submit" className="Menu">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};
