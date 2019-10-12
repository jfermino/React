import React from 'react';
import {addToCart} from "../action/carrinhoAction"
import { bindActionCreators } from 'redux'
import ProdutoItemDetail from "../components/ProdutoItemDetail"
import "./ProdutoDetail.css"
import Product from "../api/Products";
import { connect } from 'react-redux';

class ProdutoDetail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            product:{}
        }
    }

    async componentDidMount(){
        const [id] = this.props.match.params.id;
        const product = await Product.getProductsById(id);
        this.setState({product: product});
    }

    adicionarCarrinho(produto) {
        this.props.addToCart(produto);
    }

    render(){
        return (
            <ProdutoItemDetail products={this.state.product} onAddToCartClicked={() => this.adicionarCarrinho(this.state.product)} />
        )
    }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addToCart }, dispatch);
}

export default connect(
    undefined,
    mapDispatchToProps
  )(ProdutoDetail);
