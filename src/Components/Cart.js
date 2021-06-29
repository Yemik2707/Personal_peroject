import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {setCart} from '../redux/cartReducer'
import {useEffect} from 'react'
import {Link} from 'react-router-dom';


const Cart= (props) => {
  const {cart} = useSelector((store) => store.cartReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('/api/cart')
      .then((res) => {
        console.log(res.data)
        dispatch(setCart(res.data))
      }).catch(err => {
        console.log(err)
      })
    }, [dispatch])

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


    console.log(cart)
  


     
      
    return (
    <div className ='carts'>
       <h2> Your Bag </h2>
      {cart.map((products) => {
        return(
          <div  className='oneitem' key={products.product_cart_id}>
            <p>Total={products.quantity}</p>
            <img className = 'cartimage' src={products.product_image} alt="earrings"/> 
            <h4>{products.product_name}</h4>
            
            <div classname = 'deletecartitem'>
            <button className='remove'onClick={() => handleDeleteFromCart(products.product_id)}>delete</button>
            </div>
            <div className = 'editcart'>
            <button className ='minus' onClick={() => handleChangeQty(products.product_id, products.quantity - 1)}>-</button>
            <h5>Qty: {products.quantity}</h5>
            <button className ='plus' onClick={() => handleChangeQty(products.product_id, products.quantity + 1)}>+</button>
 
            </div> 
           
 
          </div>
        )
        
      })}  
   
            <Link className='checkout' to='/checkout'> <button>CONTINUE TO CHECKOUT</button></Link>
{/*   
  <p className = 'bagempty' >bag is empty <i class="fas fa-frown"/></p> */}
    </div>
    )
}


export default Cart