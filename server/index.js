// imports
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const cors = require("cors");
// todo: add a stripe key 
const stripe = require("stripe")("pk_live_51J2NLDFLuspDFFBUHJhwSU2hBUdfj5AHlIBZSCJX1ikrzj1Bk9CNL0vfwO1GuOQ7tBzn4HxThgbxfVpQh26k4FFB00jvcNFXkc")
const uuid = require("uuid")
// Controllers 
const authCtrl = require('./controllers/authController')
const productCtrl = require('./controllers/productController')
const cartCtrl = require('./controllers/cartController')
const paymentCtrl = require('./controllers/paymentController')
// const sessionCtrl = require('./controllers/sessionCtrl')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const  path = require ('path')

// app instance created 
const app = express();


app.use(express.static(__dirname + '/../build'))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
});

// top level middeleware

app.use(cors())
app.use(express.json());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized:true,
  express:{maxAge: 1000 *60 *60 *20}
}))



app.post("/payment", (req, res) => {
  const {product, token} = req.body;
  console.log("PRODUCT", product);
  console.log("PRICE", product.price);
  const idempontencyKey = uuid()

  return stripe.customers.create({
    email:token.email,
    source: token.id
  }).then(customer => {
    stripe.charges.create({
      amount: product.price * 100,
      currency: 'used',
      customer: customer.id,
      receipt_email: token.email,
      description:`product.name`
    }, {idempontencyKey})
  })
  .then(result => res.status(200).json(result))
  .catch(err => console.log(err))
})



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

 //session
// app.post('/api/sessions/appointments/:student_id', sessionCtrl.addSession)
// app.delete('/api/session/remove', sessionCtrl.cancelSession)
// app.get('/api/session/appointment/:student_id', sessionCtrl.getSessions)
// app.get('/api/session/current/appointment/:student_id', sessionCtrl.getUserLatestSession)

// Checkout

app.get('/api/payment/cart_id', cors(), paymentCtrl.addPayment)

