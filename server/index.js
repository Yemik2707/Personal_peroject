// imports
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const cors = require("cors")
// Controllers 
const authCtrl = require('./controllers/authController')
const productCtrl = require('./controllers/productController')
const cartCtrl = require('./controllers/cartController')
const paymentCtrl = require('./controllers/paymentController')
// const sessionCtrl = require('./controllers/sessionCtrl')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

// app instance created 
const app = express();

// top level middeleware

app.use(cors())
app.use(express.json());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized:true,
  express:{maxAge: 1000 *60 *60 *20}
}))


// stripe
// app.post("/payment", cors(), async (req, res) => {
//   let{amount, id} =req.body
//   try {
//     const payment = await stripe.paymentIntents.create({
//       amount,
//       currency: "USD",
//       description:"",
//       payment_method: id,
//       confirm:true
//     })
//     console.log("Payment", payment)
//     res.json({
//       message: "Payment successful",
//       success:true
//     })
//   } catch (error) {
//     console.log("Error", error)
//     res.json({
//       message: "Payment failed",
//       success:false
//     })
//   }
// })
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

 //session
// app.post('/api/sessions/appointments/:student_id', sessionCtrl.addSession)
// app.delete('/api/session/remove', sessionCtrl.cancelSession)
// app.get('/api/session/appointment/:student_id', sessionCtrl.getSessions)
// app.get('/api/session/current/appointment/:student_id', sessionCtrl.getUserLatestSession)

// Checkout

app.get('/api/payment/cart_id', cors(), paymentCtrl.addPayment)

