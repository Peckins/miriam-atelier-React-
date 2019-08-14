import React from 'react';
import './App.css';
import MenuContainer from './components/MenuContainer';
import Teste from './components/Teste';

export default class App extends React.Component {
  render() {
    return (
      <div class="App-Container">
        <MenuContainer title="Selecione uma opção" />
      </div>
    );
  }
}
