import React from 'react';
import './MenuContainer.css';
import Card from './Card';

export default class MenuContainer extends React.Component {
    render() {
        return (
            <span class="Menu-Container">
                <h3>{this.props.title}</h3>
                <Card label="Destaques" imagem="../img/roupas.jpg" descricao="Galeria de fotos." />
                <Card label="Sobre" imagem="../img/maquina.jpg" descricao="Sobre o atelier." />
                <Card label="Destaques" imagem="../img/costura.jpg" descricao="Informações de contato" />
            </span>
        );
    }
}