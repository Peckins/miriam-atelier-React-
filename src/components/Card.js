import React from "react";
import "./Card.css";

class MenuCard extends React.Component {
  render() {
    return (
      <span className="Card-Container">
        <h4>{this.props.label}</h4>
        <img src={this.props.imagem} class="Card-Img" alt={this.props.dsImg} />
        <p>{this.props.descricao}</p>
      </span>
    );
  }
}

class Card extends React.Component {
  render() {
    return <span className="Card-Container">{this.props.content}</span>;
  }
}

export { MenuCard, Card };
