import React, { Component } from 'react';
import { connect } from 'react-redux';
import './resumo.css';

export default class Resumo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {        
        return (
            <div className="container">
                <div className="resumo">
                    <div className="resumo-body">
                        <div className="resumo-modelo">
                            Modelo: Jetta
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


// function mapStateToProps(state) {
//     return {
//         listOpcionais: state.opcionais,
//     }
// }

// export default connect(
//     mapStateToProps,
// )(Opcionais)