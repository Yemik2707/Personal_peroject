import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {setCart} from '../redux/cartReducer'
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { CardNumberElement } from '@stripe/react-stripe-js';


const Cart= (props) => {
  const {cart} = useSelector((store) => store.cartReducer)
  const dispatch = useDispatch();
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    axios.get('/api/cart')
      .then((res) => {
        console.log(res.data)
        dispatch(setCart(res.data))
      }).catch(err => {
        console.log(err)
      })
    }, [dispatch]);


    useEffect(() => {
      if (cart) {
        const total = cart.reduce((prev, curr) => {
          console.log('prev', prev);
          console.log('curr', parseInt(curr.product_price));
          return prev + parseInt(curr.product_price);

        }, 0);
        setCartTotal(total); 
      }
    }, [cart])
    console.log('CARTTOTAL:', cartTotal)
  const handleDeleteFromCart = (product_id) => {
    axios.delete(`./api/cart/${product_id}`)
      .then((res) => {
        dispatch(setCart(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleChangeQty = (product_id, quantity) => {
    if(quantity <= 0){
      handleDeleteFromCart(product_id)
      }else{
      axios.put(`/api/cart/${product_id}`, {quantity})
        .then(res => {
          dispatch(setCart(res.data))
        })
        .catch(err => {
          console.log(err)
        })
      }
  }


    console.log('CART:', cart)
  


     
      
    return (
    <div className ='carts'>
      <br/><br/>
       
       {cart.length === 0 ? <p className = 'bagempty'>Your bag is empty <i class="fas fa-frown"/></p> : null}
      {cart.map((products) => {
        return(
          <div  className='oneitem' key={products.product_cart_id}>

            <img className = 'cartimage' src={products.product_image} alt="earrings"/> 
            <h4>{products.product_name}</h4>
            <h5>{products.product_price}</h5>
            
            <div className = 'deletecartitem'>
            <button className='remove'onClick={() => handleDeleteFromCart(products.product_id)}>delete</button>
            </div>
            <div className = 'editcart'>
            {/* <button className ='minus' onClick={() => handleChangeQty(products.product_id, products.quantity - 1)}>-</button>
            <h5>Qty: {products.quantity}</h5>
            <button className ='plus' onClick={() => handleChangeQty(products.product_id, products.quantity + 1)}>+</button>
  */}
            </div> 
           
 
          </div>
        )
        
      })}

 
   
            <Link className='checkout' to='/StripeContainer'> <button>CONTINUE TO CHECKOUT</button></Link>
            <br/><br/>

    </div>
    )
}


export default Cart