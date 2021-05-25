import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Cadastro from './pages/Cadastro';
import Carrinho from './pages/Carrinho';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/Cadastro"  component={Cadastro} />
      <Route path="/Carrinho"  component={Carrinho} />      
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

