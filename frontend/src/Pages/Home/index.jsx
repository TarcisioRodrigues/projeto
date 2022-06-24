import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css';
export const Home = () => {
  return (
    <div className="Container">
      <div className="wrapper">
        <div className="content">
        <Link to='/login' style={{textDecorationLine:'none',color:'white',cursor:'pointer'}}>
        <button type="submit" className="Menu">
          Login
          </button>
        </Link>

       <Link to='/register' style={{textDecorationLine:'none',color:'white',cursor:'pointer'}}>
       <button type="submit" className="Menu">
          Cadastrar
          </button> </Link>
        </div>
      </div>
    </div>
  );
};
