import React from 'react';
import { Jumbotron, 
          Container,
           } from 'reactstrap';
const Article = (props) => {
  return (
    <div>      
      <Jumbotron fluid>
        <Container fluid>
          <lista className="Lista">
                  <h6>Filtros</h6>
                  <select name="select" > 
                      <option value="valor1" selected>Selecione</option>
                      <option value="valor2">Entrada</option> 
                      <option value="valor3">Refeitório</option>
                      <option value="valor4">Biblioteca</option>
                      <option value="valor5">Naaf</option>
                      <option value="valor6">Prédio A</option>
                  </select>

                  <p></p>

                  <h6>Local de partida</h6>
                  <select name="select"> 
                      <option value="valor1" selected>Selecione</option>
                      <option value="valor2">P_Arquitetura</option> 
                      <option value="valor2">Entrada</option> 
                      <option value="valor3">Refeitório</option>
                      <option value="valor4">Biblioteca</option>
                      <option value="valor5">Naaf</option>
                      <option value="valor6">Cordenação</option>
                  </select>
                  <p></p>
            

                  <h6>Local de destino</h6>
                  <select name="select"> 
                      <option value="valor1" selected>Selecione</option>
                      <option value="valor6">Cordenação</option>
                      <option value="valor5">Naaf</option>
                      <option value="valor4">Biblioteca</option>
                      <option value="valor3">Refeitório</option>
                      <option value="valor2">Entrada</option> 
                      <option value="valor2">P_Arquitetura</option> 

                  </select>
                  </lista>
        </Container>
      </Jumbotron>

    </div>
  );
};

export default Article;