import React from "react";
import "./MenuContainer.css";
// importando conteúdo dos cards
import Card from "./Card";
// importando imagens
import Roupas from "../img/roupas.jpg";
import Costura from "../img/costura.jpg";
import Maquina from "../img/maquina.jpg";

export default class MenuContainer extends React.Component {
  render() {
    return (
      <span class="Menu-Container">
        <h3>{this.props.title}</h3>
        <Card label="Destaques" imagem={Roupas} descricao="Galeria de fotos." />

        <Card label="Sobre" imagem={Costura} descricao="Sobre o atelier." />

        <Card
          label="Destaques"
          imagem={Maquina}
          descricao="Informações de contato"
        />
      </span>
    );
  }
}
