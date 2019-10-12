import React from 'react';
import CarrinhoItem from '../components/carrinhoItem'
import { connect } from "react-redux";
import "./Carrinho.css"

class Carrinho extends React.Component {
    constructor(props){
        super(props);
        this.state = {total:0};
    }
   
    render(){
        return (
            <div className="container">
                {this.props.value != undefined &&
                     this.props.value.products.map(function(value){
                        return <CarrinhoItem item ={value}/> 
                     })
                }          
                <div className="cart-price">
                    <span>Total Price: {this.props.value.products.reduce((x,y)=>x + y.price,0).toFixed(2)}</span>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        value: state.car
    }
}

export default connect(mapStateToProps)(Carrinho);

