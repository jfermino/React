import {VERSAO_LISTAR} from '../action/versaoAction'


const INITIAL_STATE = {
    Versao:[
        {nome:"MPI", preco:10.00, image:"up.webp", idModelo:1 },
        {nome:"Connect 170 TSI", preco:11.00, image:"upTSI.webp", idModelo:1 },
        {nome:"1.0", preco:12.00, image:"gol.webp",idModelo:2 },
        {nome:"1.6", preco:13.00, image:"gol1_6.webp",idModelo:2 },
        {nome:"1.0", preco:13.00, image:"voyage.webp",idModelo:3 },
        {nome:"1.6", preco:14.00, image:"voyage1_6.webp",idModelo:3 },
        {nome:"1.0", preco:14.00, image:"polo.webp",idModelo:4 },
        {nome:"Confortline 200 TSI", preco:15.00, image:"poloTSI.webp",idModelo:4 },
        {nome:"1.6 MSI", preco:15.00, image:"virtus.webp",idModelo:5 },
        {nome:"Confortline 200 TSI", preco:15.00, image:"virtusTSI.webp",idModelo:5 },
        {nome:"Golf", preco:16.00, image:"golf.webp",idModelo:6 },
        {nome:"Golf GTI", preco:18.00, image:"golfgti.webp",idModelo:6 },
        {nome:"Confortline", preco:20.00, image:"jetta.webp", idModelo:7 },
        {nome:"Jetta R-Line", preco:22.00, image:"jettaRLine.webp", idModelo:7 },
        {nome:"Higline", preco:21.00, image:"passat.webp",idModelo:8 },
        {nome:"Passat TSI", preco:21.00, image:"passatHigline.webp",idModelo:8 },
        {nome:"Amarok Confortline", preco:25.00, image:"AmarokConfortline.webp",idModelo:9 },
        {nome:"Amarok V6 Extreme", preco:25.00, image:"AmarokV6.webp",idModelo:9 },
    ],
}

export default function(state = INITIAL_STATE, action){
    console.log("entrando no reducer MODELO");

    switch(action.type){
        case VERSAO_LISTAR:
            return{
                ...state,
                modeloSelecionado: action.payload
            }
        default:
            return state
    }
}
