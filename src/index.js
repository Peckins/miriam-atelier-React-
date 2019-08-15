import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// roteador de páginas
import { BrowserRouter, Switch, Route } from "react-router-dom";
// importando páginas
import Destaques from "./pages/Destaques";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

ReactDOM.render(
  // definindo rotas de acesso
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/destaques" component={Destaques} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/contato" component={Contato} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
