import React from "react";
import "./App.css";
// importando componentes
import { MenuContainer } from "./components/Container";

export default class App extends React.Component {
  render() {
    return (
      <div class="App-Container">
        <MenuContainer titulo="Seleciona uma opção." />
      </div>
    );
  }
}
