import React from 'react';
import './styles.css';
export const Home = () => {
  return (
    <div className="Container">
      <div className="wrapper">
        <button type="submit" className="Menu">
          Login
        </button>

        <button type="submit" className="Menu">
          Cadastrar
        </button>
      </div>
    </div>
  );
};
