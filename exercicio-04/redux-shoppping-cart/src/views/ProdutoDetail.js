import React from 'react';
import { connect } from "react-redux";
import Product from "../api/Products";
import "./ProdutoDetail.css"

class ProdutoDetail extends React.Component {

    componentDidMount(){
        const [id] = this.props.match.params.id;
        this.props.dispatch(Product.getProductsById(id));
    }

    render(){
        const { error, loading, products } = this.props;
        if(error){
            return <div>Ocorreu um erro ao buscar o produto: {error}</div>
        }
        if(loading){
            return <div> Buscando Produtos...</div>
        }
        
        return (
            <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="produtDetail-image">
                                {products.image != "" &&
                                    <img src={require(`../assets/images/${products.image}`)} alt={products.name}></img>
                                }
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="produtDetail-content">
                                <h2>{products.name}</h2>
                                <p>
                                    {products.description}
                                </p>
                                <input type="button" className="btn btn-primary" value="Adicionar ao Carrinho" />
                            </div>
                        </div>
                    </div>
            </div>
    )
    }
}

function mapStateToProps(state){
    return{
        products: state.produtoDetailReducer.produtos,
        loading:  state.produtoDetailReducer.loading,
        error:  state.produtoDetailReducer.error
    }
}

export default connect(mapStateToProps)(ProdutoDetail);
