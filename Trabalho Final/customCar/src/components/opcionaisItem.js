import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import {selecionarOpcao,removerOpcao} from '../action/opcionaisAction'

class OpcionaisItem extends React.Component {
    constructor(props) {
        super(props)
    }

    alterarSelecaoOpcionais(target){
        if(target.currentTarget.checked){
            this.props.selecionarOpcao(this.props.item);
        }else{
            this.props.removerOpcao(this.props.item)
        }
    }

    render() {
        return (
            <div className="opcionais-row">
                <div className="opcionais-row-content row">
                    <div className="col-sm-12">
                        <input type="checkbox" onChange={this.alterarSelecaoOpcionais.bind(this)} className="opcionais-row__checkbox"></input>
                        <span className="opcionais-row-nome__span">{this.props.item.nome}</span>
                        <span className="opcionais-row-valor__span">R$ {this.props.item.preco}</span>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selecionarOpcao, removerOpcao},dispatch);
}

export default connect(
    undefined,
    mapDispatchToProps
)(OpcionaisItem)