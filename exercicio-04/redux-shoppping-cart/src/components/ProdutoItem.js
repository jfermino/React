import React from 'react';
import { Link } from "react-router-dom";

function ProdutoItem(props){
    return(
        <div className="col-4">
            <div className="produto-item">
            <img src={require(`../assets/images/${props.item.image}`)} alt={props.item.name}></img>
                <h2>{props.item.name}</h2>
                <h6>Price:${props.item.price}</h6>
                <Link to={`/prod/${props.item.id}`}>
                    <input className="btn btn-info" type="button" value="Detalhe" />
                </Link>
            </div>
        </div>
    )
}

export default ProdutoItem;