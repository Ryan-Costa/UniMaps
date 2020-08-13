
import React from 'react';
import ProjetoFinal from './Layouts/ProjetoFinalBWhite.png';
import './index.css';

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ProjetoFinal} className="App-logo" alt="logo" />
        <p>
          Olá, essa é a página inicial!
        </p>
        <a
          className="App-link"
          href="http://localhost:3000/Inicio"
          target="_blank" 
          rel="noopener noreferrer"
        >
         Vamos para a aplicação!
        </a>
      </header>
    </div>
  );
}

export default Main;
