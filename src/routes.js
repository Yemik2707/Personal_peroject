import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth' 
import Cart from './Components/Cart'
import Register from './Components/Register'
import Products from './Components/Products'
import Design from './Components/Design'
import Checkout from './Components/Checkout'
import AboutUs from './Components/AboutUs'
import Signin from './Components/Signin'


export default ( 
<Switch>
<Route exact path='/products' component={Products} />
<Route path='/auth' component={Auth} />
<Route path= '/register' component = {Register}/>
<Route path='/cart' component={Cart} />
<Route path='/design' component={Design} />
<Route path='/checkout' component={Checkout} />
<Route path='/aboutus' component={AboutUs} />
<Route path='/signin' component={Signin} />

</Switch>
)