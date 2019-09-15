import React from 'react';
import "./Carrinho.css"

function Carrinho(props) {
    return (
        <div className="container">
            <div className="row cart-item" >
                <div className="col-8 Carrinho-detail">
                        <div className="Carrinho-detail-image">
                            <img src="http://lorempixel.com/100/100/" ></img>
                        </div>
                        <div className="Carrinho-detail-content">
                            <h3>Product title</h3>
                            <span>Price: $1977.00</span>
                        </div>
                </div>
                <div className="col-4 Carrinho-detail-button">
                    <div className="Carrinho-detail-btn">
                        <input className="btn btn-info"  type="button" value="Remover" />   
                    </div>
                </div>
            </div>
            <div className="row cart-item">
                <div className="col-8 Carrinho-detail">
                        <div className="Carrinho-detail-image">
                            <img src="http://lorempixel.com/100/100/" ></img>
                        </div>
                        <div className="Carrinho-detail-content">
                            <h3>Product title</h3>
                            <span>Price: $1977.00</span>
                        </div>
                </div>
                <div className="col-4 Carrinho-detail-button">
                    <div className="Carrinho-detail-btn">
                        <input className="btn btn-info"  type="button" value="Remover" />   
                    </div>
                </div>
            </div>
            <div className="cart-price">
                <span>Total Price:</span>
            </div>
        </div>
    )
}

export default Carrinho;