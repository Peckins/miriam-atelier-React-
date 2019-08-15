import React from "react";
import { Link } from "react-router-dom";
import "./Menu.Container.css";
// importando conteúdo dos cards
import MenuCard from "./Menu.Card";
// importando imagens
import Roupas from "../../img/roupas.jpg";
import Costura from "../../img/costura.jpg";
import Maquina from "../../img/maquina.jpg";

export default class MenuContainer extends React.Component {
  render() {
    return (
      <span className="Menu-Container">
        <h3>{this.props.title}</h3>

        <Link to="/destaques" className="link">
          <MenuCard
            label="Destaques"
            imagem={Roupas}
            descricao="Galeria de fotos."
          />
        </Link>

        <Link to="/sobre" className="link">
          <MenuCard
            label="Sobre"
            imagem={Costura}
            descricao="Sobre o atelier."
          />
        </Link>

        <Link to="/contato" className="link">
          <MenuCard
            label="Destaques"
            imagem={Maquina}
            descricao="Informações de contato"
          />
        </Link>
      </span>
    );
  }
}
