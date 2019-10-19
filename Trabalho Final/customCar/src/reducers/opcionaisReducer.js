import {OPCIONAIS_ADD, OPCIONAIS_REMOVER} from '../action/opcionaisAction'


const INITIAL_STATE = {
    Opcionais:[
        {id: 1, nome:"Couro Sintetico", preco:100.00},
        {id: 2, nome:"Rodas Liga Leve", preco:150.00},
        {id: 3, nome:"Kit Multimída", preco:200.00},
        {id: 4, nome:"Kit Farois LED", preco:50.00},
        {id: 5, nome:"Sensor de Chuva", preco:30.00},
    ],
    OpcionaisSelecionados:[]
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case OPCIONAIS_ADD:
            return{
                ...state,
                OpcionaisSelecionados: state.OpcionaisSelecionados.concat(action.payload)
            }
        case OPCIONAIS_REMOVER:
            return{
                ...state,
                OpcionaisSelecionados: state.OpcionaisSelecionados.filter(o=>o.id != action.payload.id)
            }
        default:
            return state
    }
}
