import React from "react";
import { Link } from "react-router-dom";
import "./Container.css";
// importando cards
import { MenuCard } from "./Card";
// importando fotos
import Roupas from "../img/roupas.jpg";
import Costura from "../img/costura.jpg";
import Maquina from "../img/maquina.jpg";

class Container extends React.Component {
  render() {
    return <span className="Menu-Container">{this.props.content}</span>;
  }
}

class MenuContainer extends React.Component {
  render() {
    return (
      <span className="Menu-Container">
        <h3>{this.props.titulo}</h3>
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

export { Container, MenuContainer };
