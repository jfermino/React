import React, { Component } from 'react';
import { connect } from 'react-redux';
import CorItem from '../components/corItem';
import './cor.css'



class Cor extends Component {
    constructor(props) {
        super(props);
    }

    buscarCoresPorTipo(tipo) {
        let NomeTipo = " ";
        if(tipo == 1)
            NomeTipo = "Sólida"
        else if(tipo == 2)
            NomeTipo = "Metálica"

        let listCorSolida = this.props.listCor.Cores.filter(c=> c.tipo ==tipo && c.versao.includes(this.props.versao.VersaoSelecionada.id));
        if(listCorSolida.length > 0){
            return(
                <div>
                    <div className="cor-row__title">
                            <h4>{NomeTipo}</h4>
                        </div>
                        <section className="row cor-row">
                            {this.props.listCor.Cores.filter(c=> c.tipo ==tipo && c.versao.includes(this.props.versao.VersaoSelecionada.id)).map(c => (
                                <CorItem item={c} history={this.props.history}/>
                            ))}
                        </section>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container">
                <div className="cor">
                    <div className="cor-body__title">
                        <h3>Escolha sua cor</h3>
                    </div>
                    <div className="cor-row">
                       {this.buscarCoresPorTipo(1)}
                    </div>
                    <div className="cor-row">
                        {this.buscarCoresPorTipo(2)}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        listCor: state.cor,
        versao: state.versao
    }
}

export default connect(
    mapStateToProps,
)(Cor)