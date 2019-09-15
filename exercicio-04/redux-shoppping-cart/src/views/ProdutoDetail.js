import React, { useState, useEffect } from 'react';
import Product from "../api/Products";
import "./ProdutoDetail.css"

function ProdutoDetail(props) {
    const [id] = useState(props.match.params.id);
    const [produto, setProduto] = useState();
    useEffect(() => {
        Product.getProductById(id).then(function (result) {
            setProduto(result);
        });
    }, [id]);

    return (
            <div className="container">
                {produto != undefined &&
                    <div className="row">
                        <div className="col-6">
                            <div className="produtDetail-image">
                                {console.log(produto)}
                                <img src={require(`../assets/images/${produto.image}`)} alt={produto.name}></img>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="produtDetail-content">
                                <h2>{produto.name}</h2>
                                <p>
                                    {produto.description}
                                </p>
                                <input type="button" className="btn btn-primary" value="Adicionar ao Carrinho" />
                            </div>
                        </div>
                    </div>
                }
            </div>
    )
}

export default ProdutoDetail;