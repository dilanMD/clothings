import React from 'react'
import './CartDropDown.scss'

import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cartSelector'

import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'

const CartDropDown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default connect(mapStateToProps)(CartDropDown)