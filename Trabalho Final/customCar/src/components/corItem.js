import React from 'react';
import {selecionarCor} from '../action/corAction';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


class CorItem extends React.Component {
    constructor(props) {
        super(props)
    }

    definirCor(){
        this.props.selecionarCor(this.props.item);
        this.props.history.push("/opcionais");
    }
    
    render() {
        return (
            <div className="col-md-3 cor-row-item" onClick={this.definirCor.bind(this)}>
                <div className="cor-row-item__image">
                    <img src={require(`../assets/images/cores/${this.props.item.imagem}`)} alt={this.props.nome}></img>
                </div>
                <div className="cor-row-item__preco">R$ {this.props.item.preco.toFixed(2)}</div>
                <p className="cor-row-item__nome">{this.props.item.nome}</p>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selecionarCor},dispatch);
}

export default connect(
    undefined,
    mapDispatchToProps,
)(CorItem)