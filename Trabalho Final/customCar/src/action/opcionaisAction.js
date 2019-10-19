export const OPCIONAIS_ADD = "ADD";
export const OPCIONAIS_REMOVER = "REMOVER";

export function selecionarOpcao(opcional){
    return{
        type: OPCIONAIS_ADD,
        payload: opcional
    }
}

export function removerOpcao(opcional){
    return{
        type: OPCIONAIS_REMOVER,
        payload: opcional
    }
}
