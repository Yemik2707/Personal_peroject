import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React, { useEffect, useDispatch} from 'react';
import axios from 'axios'
import {setCart} from '../../redux/cartReducer'
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51J2NLDFLuspDFFBUSAld0obQjGRG3MyRQSRFrtJQtHINw63cXJnK3Z4y1TlbJq9p7EHQ2zzBxwY7RPAY1PgquaEK00TIKwYIB7"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(){

    const dispatch = useDispatch()
      
        useEffect(() => {
          axios.get('/api/payment/cart_id')
            .then((res) => {
              console.log(res.data)
              dispatch(setCart(res.data))
            }).catch(err => {
              console.log(err)
            })
          }, [dispatch])
    return (
           <Elements stripe={stripeTestPromise}>
           <PaymentForm />
           </Elements>
        
    )
}

