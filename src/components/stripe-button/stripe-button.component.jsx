import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_WyP26sdtosrS0Wb4mBtaC5KH00HdzupjIm";

    const onToken = token => {
        console.log(token); 
        alert('Payment Sucessful')      
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            // image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is R$${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;