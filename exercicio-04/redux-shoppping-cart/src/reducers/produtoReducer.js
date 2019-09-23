import {LIST_PRODUCTS,LIST_PRODUCTS_BEGIN,LIST_PRODUCTS_ERROR,LIST_PRODUCTS_ID} from '../action/produtoAction'

const INITIAL_STATE = { 
    produtos:[],
    loading: false,
    error:null
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case LIST_PRODUCTS:
            return {
                ...state,
                loading: false,
                produtos: action.payload.products
            };
        case LIST_PRODUCTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case LIST_PRODUCTS_ERROR:
                return {
                    ...state,
                    loading: false,
                    produtos: action.payload.error
                };
        case LIST_PRODUCTS_ID:
            return{
                ...state,
                loading: false,
                produtos: action.payload.product
            }
        default:
            return state
        
    }
}
