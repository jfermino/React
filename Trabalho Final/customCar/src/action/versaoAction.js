export const VERSAO_ADD = "ADD"

export function selecionarVersao(versao){
    return{
        type: VERSAO_ADD,
        payload: versao
    }
}