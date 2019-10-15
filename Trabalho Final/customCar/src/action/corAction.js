export const COR_ADD = "ADD"

export function selecionarCor(cor){
    console.log("Entrando na action SelecionarCor")
    return{
        type: COR_ADD,
        payload: cor
    }
}