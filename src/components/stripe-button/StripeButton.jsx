import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_P8GD2YVSKZzlNggMh34PQKCu00TVWq4atU'

    const onToken = token => {
        console.log(token)
        alert('Payment Successfull')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Clothings Pvt Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton