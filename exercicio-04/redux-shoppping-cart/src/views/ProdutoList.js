import React, { useState, useEffect } from 'react';
import "./ProdutoList.css";
import ProdutoItem from '../components/ProdutoItem';
import { connect } from "react-redux";
import Product from "../api/Products";

class ProdutoList extends React.Component {
    componentDidMount(){
        this.props.dispatch(Product.getProducts());
    }
    render(){
        const { error, loading, products } = this.props;
        if(error){
            return <div>Ocorreu um erro ao buscar os produtos: {error}</div>
        }
        if(loading){
            return <div> Buscando Produtos...</div>
        }
        return (
            <div className="container">
                <div className="row">
                    {
                        products.map(function (value) {
                            return <ProdutoItem item={value}/>
                        }) 
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        products: state.produtoReducer.produtos,
        loading:  state.produtoReducer.loading,
        error:  state.produtoReducer.error
    }
}
export default connect(mapStateToProps)(ProdutoList)