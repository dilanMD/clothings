import React from 'react'
import './Authenticate.scss'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'

const Authenticate = () => {
    return (
        <div className="authenticate">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authenticate