import {useState} from 'react'
import axios from 'axios'
import {setUser} from '../redux/authReducer'
import {setCart} from '../redux/cartReducer'
import {useDispatch} from 'react-redux'
import { Link}  from 'react-router-dom';

const Auth = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  
  const handleLogin = () => {
 
    axios.post('/auth/login', {email, password})
    .then((res) => {
      console.log('USER DATA', res.data)
      dispatch(setUser(res.data))
      axios.get('/api/cart').then((response) => {
        dispatch(setCart(response.data))
        props.history.push('/products')
      })
    })
    .catch(err => console.log(err))
  }
  return(

    <div className= "auth">
      <div className = "authheader">
        <div >
        <Link className='loginlink' to = '/auth'>LOGIN</Link>
        </div>
       <div >
        <Link className='newcustomerlink' to = '/register'>NEW CUSTOMER</Link>
      </div>
      </div>
    
      <p>email*</p>
      <input className = 'email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <p>password*</p>
      <input className = 'password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className = 'authbuttons'>
      <button className = 'login' onClick={handleLogin}>Login</button>
      <p className='forgotpw'>Forgot your password?</p>
      
      </div>
    </div>
   
     
     
  )
}

export default Auth
