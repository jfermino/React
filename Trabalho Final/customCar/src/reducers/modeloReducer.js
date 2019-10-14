import {MODELO_ADD} from '../action/modeloAction'


const INITIAL_STATE = {
    Modelos:[
        {id:1,nome:"up!", image:"up.webp" },
        {id:2,nome:"Gol", image:"gol.webp" },
        {id:3,nome:"Voyage", image:"voyage.webp" },
        {id:4,nome:"Polo", image:"polo.webp" },
        {id:5,nome:"Virtus", image:"virtus.webp" },
        {id:6,nome:"Golf", image:"golf.webp" },
        {id:7,nome:"Jetta", image:"jetta.webp" },
        {id:8,nome:"Passat", image:"passat.webp" },
        {id:9,nome:"Amarok", image:"amarok.webp" },
    ],
    modeloSelecionado:{}
}

export default function(state = INITIAL_STATE, action){
    console.log("entrando no reducer MODELO");

    switch(action.type){
        case MODELO_ADD:
            return{
                ...state,
                modeloSelecionado: action.payload
            }
        default:
            return state
    }
}
