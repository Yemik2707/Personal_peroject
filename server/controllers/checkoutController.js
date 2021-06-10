module.exports = {
    getCheckout: (req,res) => {
        const db = req.app.get('db')
        db.checkout.get_checkout()
        .then(checkout => {
            res.status(200).send(checkout)
        })
        .catch(err => {
            console.log(err)
            err.status(500).send(err)
        })
    }
}