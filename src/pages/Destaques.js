import React from "react";
// Componentes da página
import { Container } from "../components/Container";
import { Card } from "../components/Card";

// criando página de destaques
export default class Destaques extends React.Component {
  constructor() {
    super();
    this.conteudo = <h3>Teste</h3>;
  }

  render() {
    return <Container content={this.conteudo} />;
  }
}
