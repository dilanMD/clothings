import React from 'react'
import './CartDropDown.scss'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cartSelector'
import { toggleCart } from '../../redux/cart/cartActions'

import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'

const CartDropDown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )) :
                    <div className="empty-message">Your cart is empty</div>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCart())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown))