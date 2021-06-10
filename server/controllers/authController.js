const bcrypt = require('bcrypt')
// after we register the user we created a cart for that user using the user id 
// we got back the cart_id and we attacthed it to the user that we are saving on session
//  so that our server will have that information and we wil also send that info to the front end 

// we need controllers for organizational purpose 
// the auth controller holds all the handler functions for our endpoints for the auth page 

// next line exports all the handlers to index.js and we have to import each of our controllers in out index. js as well 
module.exports ={
    register: async(req,res) => {
        // the db variable is comunicating with the database 
        const db = req.app.get('db')
        // in this next variable we are destructuring those four user inputes from req.body aka front end 
        const {first_name, last_name, email, password} =req.body
        // next step controls what happens if a user tries to register with an email that is already in the users table 
        // we use await becasue this line of code is awaiting to hear a response from the database if the email has been used before 
        const [result] = await db.auth.check_email(email)
        // so if result is true then we get an error message 409(conflict) email taken!
        if(result){
            return res.status(409).send('Email Taken!')
        }
        // next two lines handle the password 
        // in line 30 password is deleted for safety instead the word hash replaces the password 
        // salt is basically an extra messure of safelty to protected the password 
        // getSaltSync and hashSync are built in functions that we have acces to when installing bcrypt
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        // next line happens when user is registered 
        const [user] = await db.auth.register_user(first_name, last_name, email, hash)
        // when user is registered they get a cart assigned
        const cart = await db.cart.create_cart(user.user_id)
        delete user.password
        req.session.user = user
        req.session.user.cart_id = cart.cart_id
        return res.status(200).send(req.session.user)
    },

    login: async(req,res) => { 
        const db = req.app.get('db')
        const {email, password} = req.body
        const [user] = await db.auth.check_email(email)
        if(!user){
            return res.status(401).send("user Not Found.")
        }
        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if(!isAuthenticated){
            return res.status(401).send("Password Incorect")
        } 
        const[cart] = await db.cart.get_cart(user.user_id)
        delete user.password 
        req.session.user = user
        req.session.user.cart = cart.cart_id
        return res.status(200).send(req.session.user)
    },


    logout: (req, res) => { 
        req.session.destroy()
        res.sendStatus(200)
    },
    getUser: (req,res) => { 
        const db = req.app.get('db')
        const {user} = req.session
        if(!user){
            return res.status(511).send('User not logged in')
        }
        db.cart.get_cart_items(user.cart_id)
        .then((cart) => {
            res.status(200).send({user, cart})
        })
    }
}