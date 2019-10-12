import {CAR_ADD, CAR_REMOVE} from "../action/carrinhoAction"

const INITIAL_STATE={
    products:[]
}

export default function(state = INITIAL_STATE,action){
    console.log("entrando no reducer ");
    switch(action.type){
        case CAR_ADD:
                console.log("REDUCER: ADD")
            return{
                ...state,
                products: state.products.concat(action.payload)
            }
        case CAR_REMOVE:{
            console.log ("REDUCER: REMOVE")
            console.log(action.payload);
            return{
                ...state,
                products: state.products.filter(x=>x.id != action.payload.id)
            }
        }
        default:
            console.log("REDUCER: Valor Padrão");
            return state;
    }
}