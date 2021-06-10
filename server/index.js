// imports
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
// Controllers 
const authCtrl = require('./controllers/authController')
const productCtrl = require('./controllers/productController')
const cartCtrl = require('./controllers/cartController')
const designCtrl = require('./controllers/designController')
const checkoutCtrl = require('./controllers/checkoutController')
// app instance created 
const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;


// top level middeleware
app.use(express.json());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized:true,
  express:{maxAge: 1000 *60 *60 *20}
}))
// Database conncetion 
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
    })
      .then(db => {
        app.set("db", db);
        console.log('Database Connected')
        app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}.`))
      })
      .catch(err => console.log(err));
    
// Endpoints

// Auth
app.post('/auth/register', authCtrl.register) 
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth/me', authCtrl.getUser)

// Products 
app.get('/api/products', productCtrl.getProducts)

// Cart
app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart/:product_id', cartCtrl.addToCart)
app.delete('/api/cart/:product_id', cartCtrl.deleteItemFromCart)
app.put('/api/cart/:product_id', cartCtrl.changeCartQty)


// Design 
app.get('/api/design', designCtrl.getDesign)
app.post('/api/design/:design_id', designCtrl.addToDesign)


// Checkout
app.get('/api/checkout', checkoutCtrl.getCheckout)


