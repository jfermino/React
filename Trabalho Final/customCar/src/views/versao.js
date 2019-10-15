import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import CarItem from '../components/carItem'
import {selecionarVersao} from '../action/versaoAction'
import './versao.css';



class Versao extends Component {
    constructor(props) {
        super(props);
    }

    definirVersao(versao){
        this.props.selecionarVersao(versao);
        this.props.history.push("/cor");
    }

    render() {
        const [id] = this.props.match.params.id;
        return (
            <div>
                {this.props.listVersao.Versao.filter(v => v.idModelo == id).map(v => (
                    <section className="versao">
                        <div className="grid-row grid-row--centered-content">
                            <figure className="car-item-content">
                                <div onClick={this.definirVersao.bind(this,v)} className="car-item-content__link">
                                    <CarItem item={v} />
                                </div>
                            </figure>
                        </div>
                    </section>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        listVersao: state.versao
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selecionarVersao},dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Versao)