import React from 'react'
import './CartIcon.scss'
import { ReactComponent as ShoppingBag } from '../../assets/shoppingBag.svg'

import { connect } from 'react-redux'
import { toggleCart } from '../../redux/cart/cartActions'
import { selectCartItemsCount } from '../../redux/cart/cartSelector'

const CartIcon = ({ toggleCart, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCart}>
            <ShoppingBag className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)