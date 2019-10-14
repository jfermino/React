import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

export default class Nav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <nav className="nav-global">
            <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link to="/" className="nav-link"><i className="fas fa-home"></i>Seleção Modelo</Link>
            </li>
            <li className="nav-item">
                <Link to="/versao" className="nav-link"><i className="fas fa-clipboard-list"></i>Seleção Versão</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link"><i className="fas fa-cart-arrow-down"></i>Seleção Cor</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link"><i className="fas fa-cart-arrow-down"></i>Seleção Opcionais</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link"><i className="fas fa-cart-arrow-down"></i>Resumo</Link>
            </li>
            </ul>
        </nav>
        )
    }
}

