export const CAR_ADD = "ADD";
export const CAR_REMOVE = "REMOVE"

export function addToCart(product){
    return {
        type: CAR_ADD,
        payload: product
    }
}
export function remove(product){
    return {
        type: CAR_REMOVE,
        payload: product
    }
}



