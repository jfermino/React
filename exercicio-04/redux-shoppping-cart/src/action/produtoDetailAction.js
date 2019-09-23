export const LIST_PRODUCT_DETAIL_BEGIN = "LIST_PRODUCT_DETAIL_BEGIN";
export const LIST_PRODUCT_DETAIL_ERROR = "LIST_PRODUCT_DETAIL_ERROR";
export const LIST_PRODUCT_DETAIL_ID = "LIST_PRODUCT_DETAIL_ID";

export function ListProdutoDetailBegin(){
    console.log("Chamando Action ListProdutoDetailBegin");
    return{
        type:LIST_PRODUCT_DETAIL_BEGIN
    }
}


export function ListProdutosDetailError(error){
    console.log("Chamando Action ListProdutosDetailError");
    return{
        type: LIST_PRODUCT_DETAIL_ERROR,
        payload:{error}
    }
}

export function ListProdutosDetailByID(product){
    console.log("Chamando Action ListProdutosDetailByID");
    return{
        type: LIST_PRODUCT_DETAIL_ID,
        payload: {product}
    }
}
