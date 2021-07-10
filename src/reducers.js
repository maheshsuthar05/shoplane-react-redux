import { ADD_PRODUCT } from "./actionTypes"
import { ADD_TO_CART} from "./actionTypes"

const initialState = {
    product: window.localStorage.getItem("product") === null ? [] : JSON.parse(window.localStorage.getItem("product")),
    cartItems: window.localStorage.getItem("cartItems") === null ? [] : JSON.parse(window.localStorage.getItem("cartItems"))
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_PRODUCT:
            window.localStorage.setItem('product', JSON.stringify(payload))
            return { ...state, product: payload }

        case ADD_TO_CART:
            window.localStorage.setItem('cartItems', JSON.stringify(payload))
            return { ...state, cartItems: payload }
            
        default:
            return state
    }
}
