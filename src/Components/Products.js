import {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {setCart} from '../redux/cartReducer'
import React from 'react'

const Products = (props) => {
const [products, setProducts] = useState([])
const {user} = useSelector((store) => store.auth)
const {cart} = useSelector((store) => store.cartReducer)
const dispatch = useDispatch()

  useEffect(() => {
    axios.get('/api/products')
    .then((res) => {
    setProducts(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  // const handleFilter = (product_id) => {

  // }

  const handleAddToCart = (product_id) => {
    const product = cart.find((product) => product.product_id === product_id)
    console.log(product)
    console.log(cart, 'this is my cart')
 
    if(!product){
      axios.post(`/api/cart/${product_id}`)
      .then((res) => {
      console.log(res.data, 'this is my data')
        dispatch(setCart(res.data))
      })
      .catch((err) => {
        console.log(err)
        if(err.response.status === 511){
          props.history.push('/cart')
        }
      })
    }else{
 
      axios.put(`/api/cart/${product_id}`, {quantity: product.quantity + 1})
      .then((res) => {
        dispatch(setCart(res.data))
      })
      .catch(err => {
        console.log(err)
        if(err.response.status === 511){
          props.history.push('/auth')
        }
      })
    }
  }
  console.log('user:', user)
  return(
    <div className = 'products'>
{/*       
      <select>
        <option selected value="Filter">Filter</option>
        <option value="Bundle">Bundles</option>
        <option value="For him & her">For him & her</option>
        
      </select> */}
      <div className = 'product-list'>
      {products.map((product) => {
        return (
          <div className ='oneproduct' key={product.product_id}>
            <img className = 'image' src={product.product_image} alt="earrings"/> 
            <h4>{product.product_name}</h4>
            {user && <button className = 'addtobag' onClick={() => handleAddToCart(product.product_id)}>ADD TO BAG</button>}
          </div>
        )
      })}
      </div>
    </div>
  )
}


export default Products
