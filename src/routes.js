import {Switch, Route} from 'react-router-dom'
import Auth from './Components/auth/Auth' 
import Cart from './Components/Cart'
import Register from './Components/auth/Register'
import Products from './Components/Products'
import StripeContainer from './Components/checkout/StripeContainer'
import AboutUs from './Components/AboutUs'
import Signin from './Components/auth/Signin'


export default ( 
<Switch>
<Route exact path='/' component={Products} />
<Route path='/products' component={Products} />
<Route path='/auth' component={Auth} />
<Route path= '/register' component = {Register}/>
<Route path='/cart' component={Cart} />
<Route path='/StripeContainer' component={StripeContainer} />
<Route path='/aboutus' component={AboutUs} />
<Route path='/signin' component={Signin} />

</Switch>
)