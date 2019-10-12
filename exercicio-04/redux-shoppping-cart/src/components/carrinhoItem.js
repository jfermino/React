import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { remove } from '../action/carrinhoAction'

class CarrinhoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    removerProduto(produto){
        this.props.remove(this.props.item);
    }
    render() {
        return (
            <div className="row cart-item" >
                <div className="col-8 Carrinho-detail">
                    <div className="Carrinho-detail-image">
                        <img src={require(`../assets/images/${this.props.item.image}`)} alt={this.props.item.name} ></img>
                    </div>
                    <div className="Carrinho-detail-content">
                        <h3>{this.props.item.name}</h3>
                        <span>Price: ${this.props.item.price}</span>
                    </div>
                </div>
                <div className="col-4 Carrinho-detail-button">
                    <div className="Carrinho-detail-btn">
                        <input className="btn btn-info" type="button" value="Remover" onClick={this.removerProduto.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ remove }, dispatch)
}

export default connect(
    undefined,
    mapDispatchToProps
)(CarrinhoItem);
