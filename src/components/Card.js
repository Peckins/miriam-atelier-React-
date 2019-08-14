import React from "react";
import "./Card.css";

export default class Card extends React.Component {
  render() {
    return (
      <span class="Card-Container">
        <h4>{this.props.label}</h4>
        <img src={this.props.imagem} class="Card-Img" />
        <p>{this.props.descricao}</p>
      </span>
    );
  }
}
