import {Switch, Route} from 'react-router-dom'
import Auth from './Components/auth/Auth' 
import Cart from './Components/Cart'
import Register from './Components/auth/Register'
import Products from './Components/Products'
import Checkout from './Components/checkout/Checkout'
import AboutUs from './Components/AboutUs'
import Signin from './Components/auth/Signin'


export default ( 
<Switch>
<Route exact path='/' component={Products} />
<Route path='/products' component={Products} />
<Route path='/auth' component={Auth} />
<Route path= '/register' component = {Register}/>
<Route path='/cart' component={Cart} />
<Route path='/checkout' component={Checkout} />
<Route path='/aboutus' component={AboutUs} />
<Route path='/signin' component={Signin} />

</Switch>
)