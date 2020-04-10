import React from 'react'
import './CartIcon.scss'
import { ReactComponent as ShoppingBag } from '../../assets/shoppingBag.svg'

import { connect } from 'react-redux'
import { toggleCart } from '../../redux/cart/cartActions'

const CartIcon = ({ toggleCart }) => {
    return (
        <div className="cart-icon" onClick={toggleCart}>
            <ShoppingBag className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

export default connect(null, mapDispatchToProps)(CartIcon)