const stripe = require("stripe")(process.env.SESSION_SECRET)


module.exports = {
    addPayment: async (req, res) => {
        let { amount, id} = req.body
        try {
            const payment = await stripe.paymentIntents.create({
                amount,
                currency: "USD",
                description: "Checka.Clay",
                payment_method: id,
                confirm: true,
            })
            console.log("Payment", payment)
            res.json({
                message: "Payment successful",
                success: true
            })
        } catch (error) {
            console.log("Error", error)
            res.json({
                message: "Payment failed",
                success: false
            })
        }
    }
}