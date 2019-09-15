import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Nav(props){
        return(
            <nav className="nav-global">
            <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link to="/" className="nav-link"><i className="fas fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/prod" className="nav-link"><i className="fas fa-clipboard-list"></i>Produtos</Link>
            </li>
            <li className="nav-item">
                <Link to="/cart" className="nav-link"><i className="fas fa-cart-arrow-down"></i> (2) Carrinho</Link>
            </li>
            </ul>
        </nav>
        )
}

export default Nav;