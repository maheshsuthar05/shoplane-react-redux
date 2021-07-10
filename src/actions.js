import { ADD_PRODUCT } from "./actionTypes";
import { ADD_TO_CART } from "./actionTypes";

export const addProduct = (payload) => ({
    type: ADD_PRODUCT,
    payload
})

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})
