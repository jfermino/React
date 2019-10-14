export const MODELO_LISTAR = "LISTAR";
export const MODELO_ADD = "ADD"

export function selecionarModelo(modelo){
    console.log("ACTION Listar modelo");
    return{
        type: MODELO_ADD,
        payload:modelo
    }
}