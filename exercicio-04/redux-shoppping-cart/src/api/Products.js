import products from "./products-data.json";
import {ListProdutosBegin,ListProdutos,ListProdutosError,ListProdutosByID} from "../action/produtoAction"
import {ListProdutoDetailBegin,ListProdutosDetailError,ListProdutosDetailByID} from "../action/produtoDetailAction"

export default class Products {

  static _fetchProduts() {
    return new Promise((resolve, reject) => {
      if (products) {
        resolve(products);
      } else {
        reject();
      }
    });
  }

  static _fetchProdutsById(id) {
    return new Promise((resolve, reject) => {
      const product = products.items.find(p => p.id === parseInt(id));

      if (product) {
        resolve(product);
      } else {
        reject();
      }
    });
  }

  static getProducts(){
    return dispatch => {
        dispatch(ListProdutosBegin());
        return Products._fetchProduts()
          .then(function(result){
             dispatch(ListProdutos(result.items));
             return result.items;
          })
          .catch(error => dispatch(ListProdutosError(error)));
      };
  }

  static getProductsById(id){
    return dispatch => {
      dispatch(ListProdutoDetailBegin());
      return Products._fetchProdutsById(id)
        .then(function(result){
           dispatch(ListProdutosDetailByID(result));
           return result.items;
        })
        .catch(error => dispatch(ListProdutosDetailError(error)));
    };
  }

  static 
}
