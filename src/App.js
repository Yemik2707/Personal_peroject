import {useEffect} from 'react'
import './App.css';
import routes from './routes'
import Header from './Components/Header'
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
      <Header />
      {routes}
      <footer>
        <p>CONTACT US</p>
        <p>Available 9AM-6PM E.S.T.</p>
        <p>800-578-2834</p>
        <p>Cheka.Clay@gmail.com</p>
      </footer>
    </div>
  );
}

export default App
