export const LIST_PRODUCTS = "LIST_PRODUCTS";
export const LIST_PRODUCTS_BEGIN = "LIST_PRODUCTS_BEGIN";
export const LIST_PRODUCTS_ERROR = "LIST_PRODUCTS_ERROR";
export const LIST_PRODUCTS_ID = "LIST_PRODUCTS_ID";

export function ListProdutosBegin(){
    console.log("Chamando Action ListProdutosBegin");
    return{
        type:LIST_PRODUCTS_BEGIN
    }
}

export function ListProdutos(products){
    console.log("Chamando Action ListProdutos");
    return{
        type: LIST_PRODUCTS,
        payload:{products}
    }
}

export function ListProdutosError(error){
    console.log("Chamando Action ListProdutosError");
    return{
        type: LIST_PRODUCTS_ERROR,
        payload:{error}
    }
}

export function ListProdutosByID(product){
    console.log("Chamando Action ListProdutosByID");
    return{
        type: LIST_PRODUCTS_ID,
        payload: {product}
    }
}
