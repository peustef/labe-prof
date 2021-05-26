import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Carrinho from "./pages/Carrinho";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/carrinho/:produtosCarrinho" component={Carrinho} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
