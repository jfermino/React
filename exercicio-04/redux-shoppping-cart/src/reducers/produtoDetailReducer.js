import {LIST_PRODUCT_DETAIL_BEGIN,LIST_PRODUCT_DETAIL_ERROR,LIST_PRODUCT_DETAIL_ID} from '../action/produtoDetailAction'

const INITIAL_STATE = { 
    produtos:{  
        "id": 0,
        "name": "",
        "image": "",
        "price": 0,
        "description": ""
      },
    loading: false,
    error:null
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case LIST_PRODUCT_DETAIL_BEGIN:
                return {
                    ...state,
                    loading: true,
                    error: null
                };
        case LIST_PRODUCT_DETAIL_ERROR:
                return {
                    ...state,
                    loading: false,
                    produtos: action.payload.error
                };
        case LIST_PRODUCT_DETAIL_ID:
            return{
                ...state,
                loading: false,
                produtos: action.payload.product
            }
        default:
            return state
        
    }
}