import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarItem from '../components/carItem'
import './versao.css';
import { Link } from "react-router-dom";

class Versao extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const [id] = this.props.match.params.id;
        return (
            <div>
                {this.props.listVersao.Versao.filter(v => v.idModelo == id).map(v => (
                    <section className="versao">
                        <div className="grid-row grid-row--centered-content">
                            <figure className="car-item-content">
                                <Link to={`/versao/`} className="car-item-content__link">
                                    <CarItem item={v} />
                                </Link>
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

export default connect(
    mapStateToProps
)(Versao)