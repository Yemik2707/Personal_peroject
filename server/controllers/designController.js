module.exports = {
    getDesign: (req,res) => {
        const db = req.app.get('db')
        db.design.get_design()
        .then(design => {
            res.status(200).send(design)
        })
        .catch(err => {
            console.log(err)
            err.status(500).send(err)
        })
    },
    addToDesign: (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {product_id} = req.params
        if (!user){
            return res.status(511).send('User not logged in')
        }
        db.cart.add_to_cart(user.cart_id, product_id)
        .then(cart => {
            res.status(200).send(cart)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
     }
}
   
