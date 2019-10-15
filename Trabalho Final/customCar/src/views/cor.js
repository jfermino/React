import React, { Component } from 'react';
import { connect } from 'react-redux';
import CorItem from '../components/corItem'
import { Link } from "react-router-dom";
import './cor.css'


class Cor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Listando cores");
        console.log(this.props.listCor);
        return (
            <div className="container">
                <div className="cor">
                    <div className="cor-body__title">
                        <h3>Escolha sua cor</h3>
                    </div>
                    <div className="cor-row">
                        <div className="cor-row__title">
                            <h4>Metalica</h4>
                        </div>
                        <section className="row cor-row">
                            {/* TODO: Fazer filtro de seleção de cor por versão */}
                            {this.props.listCor.Cores.filter(c=> c.tipo ==2).map(c => (
                                <CorItem item={c} />
                            ))}
                        </section>
                    </div>
                    <div className="cor-row">
                        <div className="cor-row__title">
                            <h4>Sólida</h4>
                        </div>
                        <section className="row cor-row">
                        {this.props.listCor.Cores.filter(c=> c.tipo ==1).map(c => (
                                <CorItem item={c} />
                            ))}
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        listCor: state.cor
    }
}

export default connect(
    mapStateToProps
)(Cor)