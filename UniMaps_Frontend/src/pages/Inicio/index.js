import React from 'react';
import './Inicio.css';
import Headers from './Headers'
import Article from './Article'

function Inicio(){
    return(
        <div>
         <header className = "Header"> 
             <Headers>

             </Headers>
         </header>
         <body>
            
             <Article>
             </Article>

         </body>
        </div>
    );
};

export default Inicio;