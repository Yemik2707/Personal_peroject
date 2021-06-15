import {useEffect} from 'react'
import './App.css';
import routes from './routes'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {setUser} from './redux/authReducer'
import {setCart} from './redux/cartReducer'




function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('/auth/me').then(res => {
      dispatch(setUser(res.data.user))
      dispatch(setCart(res.data.cart))
    }).catch((err) => {
      console.log(err.response)
    })
  })
  return (
    <div className="app">
      {routes}
      <footer>
        <h5>CONTACT US</h5>
        <h6>Available 9AM-6PM E.S.T.</h6>
        <h6>800-578-2834</h6>
        <h6>Cheka.Clay@gmail.com</h6>
      </footer>
    </div>
  );
}

export default App
