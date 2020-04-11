import React from 'react'
import './Header.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/CartIcon'
import CartDropDown from '../cart-dropdown/CartDropDown'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cartSelector'
import { selectCurrentUser } from '../../redux/user/userSelectors'

import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebaseUtils'

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/contact" className="option">
                    CONTACT
                </Link>
                {currentUser ?
                    (
                        <div className="option" onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                    ) :
                    (
                        <Link className="option" to="/auth">SIGN IN</Link>
                    )
                }
                <CartIcon />
            </div>
            {hidden ? null : <CartDropDown />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)