import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
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
                <Link to="/cart" className="nav-link"><i className="fas fa-cart-arrow-down"></i> ({this.props.value.products.length}) Carrinho</Link>
            </li>
            </ul>
        </nav>
        )
    }
}

function mapStateToProps(state) {
    return{
        value: state.car
    }
}
export default connect(mapStateToProps)(Nav);
