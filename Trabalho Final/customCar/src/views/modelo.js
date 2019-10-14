import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarItem from '../components/carItem'
import { Link } from "react-router-dom";
import './modelo.css'

class Modelo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.listModelo);
        return (
            <div className="car-list container">
                <section className="car-category row">
                    {this.props.listModelo.Modelos.map(m => (
                        <div className="car-item col">
                            <figure className="car-item-content">
                                <Link to={`/versao/${m.id}`} className="car-item-content__link">
                                    <CarItem item={m} />
                                </Link >
                            </figure>
                        </div>
                    ))}
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        listModelo: state.modelo
    }
}

export default connect(
    mapStateToProps
)(Modelo)