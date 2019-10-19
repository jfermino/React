import React, { Component } from 'react';
import { connect } from 'react-redux';
import './opcionais.css';
import OpcionaisItem from '../components/opcionaisItem'

class Opcionais extends React.Component {
    constructor(props) {
        super(props)
    }

    finalizarMontagem(){
        alert("Montagem finalizada")
    }

    render() {        
        return (
            <div className="container">
                <div className="opcionais">
                    <div className="opcionais-body__title">
                        <h3>Escolha seus opcionais</h3>
                    </div>
                    <div className="opcionais-table container">
                        {this.props.listOpcionais.Opcionais.map(o=> (
                            <OpcionaisItem item={o}/>
                        ))}
                    </div>
                    <div className="opcionais__button">
                        <input type="button" className="btn btn-primary" onClick={this.finalizarMontagem.bind(this)} value="Finalizar" />
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        listOpcionais: state.opcionais,
    }
}

export default connect(
    mapStateToProps,
)(Opcionais)