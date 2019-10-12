import React from 'react';
import { Link } from "react-router-dom";

function ProdutoItemDetail(props){
    return(
        <div className="container">
             {props.products.id != undefined &&
                    <div className="row">
                        <div className="col-6">
                            <div className="produtDetail-image">
                                {props.products.image != "" &&
                                    <img src={require(`../assets/images/${props.products.image}`)} alt={props.products.name}></img>
                                }
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="produtDetail-content">
                                <h2>{props.products.name}</h2>
                                <p>
                                    {props.products.description}
                                </p>
                                <input type="button" onClick={props.onAddToCartClicked} className="btn btn-primary" value="Adicionar ao Carrinho" />
                            </div>
                        </div>
                    </div>
                    }
            </div>
    )
}

export default ProdutoItemDetail;