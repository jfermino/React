export const VERSAO_LISTAR = "LISTAR";
export const VERSAO_ADD = "ADD"

export function selecionarVersao(idModelo){
    console.log("ACTION Listar modelo");
    return{
        type: VERSAO_LISTAR,
        payload:idModelo
    }
}