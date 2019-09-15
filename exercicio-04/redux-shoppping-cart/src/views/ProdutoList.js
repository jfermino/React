import React, { useState, useEffect } from 'react';
import "./ProdutoList.css";
import ProdutoDetail from './ProdutoDetail';
import ProdutoItem from '../components/ProdutoItem';
import Product from "../api/Products";

function ProdutoList() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        Product.getProducts().then(function (result) {
            setProdutos(result.items);
        });
    }, []);

    return (
        <div className="container">
            <div className="row">
                {
                    produtos.map(function (value) {
                        return <ProdutoItem item={value}/>
                    })
                }
            </div>
        </div>
    )
}

export default ProdutoList;