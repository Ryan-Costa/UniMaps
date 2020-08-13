import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Inicio from './pages/Inicio';
import Feedback from './pages/Feedback'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/Inicio" component={Inicio} />
                <Route path="/Feedback" exact component={Feedback} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;