import {useState} from 'react'
import axios from 'axios'
import {setUser} from '../redux/authReducer'
import {setCart} from '../redux/cartReducer'
import {useDispatch} from 'react-redux'


const Register = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleRegister = () => {
    axios.post('/auth/register', {firstName, lastName, email, password})
      .then((res) => {
       dispatch(setUser(res.data))
       axios.get('/api/cart').then((response) =>{
        dispatch(setCart(response.data))
        props.history.push('/products')})
    })
    .catch(err => console.log(err))
  }

return (
    <div className = 'registerform'>
        <p>First Name*</p>
        <input className = 'firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <p>Last Name*</p>
        <input className = 'lastname' value={lastName} onChange={(e) => setLastName(e.target.value)} /> 
        <p>email*</p>
        <input className = 'email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>password*</p>
        <input className = 'password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className = 'register' onClick={handleRegister}>Register</button> 
    </div>
)
}

export default Register