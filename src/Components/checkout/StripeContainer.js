import React from 'react';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51J2NLDFLuspDFFBUSAld0obQjGRG3MyRQSRFrtJQtHINw63cXJnK3Z4y1TlbJq9p7EHQ2zzBxwY7RPAY1PgquaEK00TIKwYIB7"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(){
    return (
           <Elements stripe={stripeTestPromise}>
           <PaymentForm />
           </Elements>
        
    )
}

