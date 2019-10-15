import { COR_ADD } from '../action/corAction'


const INITIAL_STATE = {
    //tipo 1 : Sólida. tipo 2: Metalica
    Cores: [
        { tipo: 1, nome: "Branco Cristal", preco: 180.00 ,versao: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], imagem: "Solida_Branco.webp" },
        { tipo: 1, nome: "Preto Ninja", preco: 200.00 ,versao: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], imagem: "Solida_Preto.webp" },
        { tipo: 1, nome: "Vermelho Tornado", preco: 220.00 ,versao: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], imagem: "Solida_Vermelho.webp" },
        { tipo: 2, nome: "Azul Night", preco: 250.00 ,versao: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], imagem: "Metalica_azul.webp" },
        { tipo: 2, nome: "Cinza Platinum", preco: 230.00 ,versao: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], imagem: "Metalica_Cinza.webp" },
        { tipo: 2, nome: "Prata Sirius", preco: 230.00 ,versao: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], imagem: "Metalica_Prata.webp" }
    ],
    CorSelecionada: 0
}

export default function (state = INITIAL_STATE, action) {
    console.log("entrando no reducer MODELO");

    switch (action.type) {
        case COR_ADD:
            console.log("Entrando no Reducer de Adicionar Cor")
            console.log(action.payload);
            return {
                ...state,
                CorSelecionada: action.payload
            }
        default:
            return state
    }
}
