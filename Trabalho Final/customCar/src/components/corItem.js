import React from 'react'

export default class CorItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="col-md-3 cor-row-item">
                <div className="cor-row-item__image">
                    <img src={require(`../assets/images/cores/${this.props.item.imagem}`)} alt={this.props.nome}></img>
                </div>
                <div className="cor-row-item__preco">R$ {this.props.item.preco.toFixed(2)}</div>
                <p className="cor-row-item__nome">Azul Night</p>
            </div>
        )
    }
}