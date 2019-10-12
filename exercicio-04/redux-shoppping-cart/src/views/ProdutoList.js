import React from 'react';
import "./ProdutoList.css";
import ProdutoItem from '../components/ProdutoItem';
import { connect } from "react-redux";
import Product from "../api/Products";

class ProdutoList extends React.Component {
    constructor(props){
        super(props);
        this.state ={products:[]};
    }

    async componentWillMount(){
        const { items } = await Product.getProducts();
        this.setState({ products: items });
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    {this.state.products.map(p => (
                        <ProdutoItem item={p}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default ProdutoList