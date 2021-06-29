// import React, {useState, useEffect, useSelector, useDispatch} from 'react';
// import StripeContainer from './StripeContainer';
// import axios from 'axios'
// import {setCart} from '../../redux/cartReducer'

// const Checkout = (props) => {
//     const [showtime, setShowtime] = useState(false)
//     const {cart} = useSelector((store) => store.cartReducer)
//     const dispatch = useDispatch()
      
//         useEffect(() => {
//           axios.get('/api/checkout')
//             .then((res) => {
//               // console.log(res.data)
//               // dispatch(setCart(res.data))
//             }).catch(err => {
//               console.log(err)
//             })
//           }, [])
   

//     return (
//            <div>
//               {showtime ? <StripeContainer/> :
//                <> <h3>$5.00</h3> <img src="cart" alt="earrings" />
//               <button onClick = {() => setShowtime(true)}>Purchase</button></>}
//            </div>
        
//     )
// }

// export default Checkout