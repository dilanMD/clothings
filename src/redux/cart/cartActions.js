import { CartTypes } from './cartTypes'

export const toggleCart = () => ({
    type: CartTypes.TOGGLE_CART
})

export const addItem = item => ({
    type: CartTypes.ADD_ITEM,
    payload: item
})