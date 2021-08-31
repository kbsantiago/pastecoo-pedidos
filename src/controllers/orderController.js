module.exports = app => {
    app.get('/orders', (request, response) => {
        return response.json({ message: "Get orders" })
    })

    app.post('/orders', (request, response) => {
        console.log(req.body)
        res.send('Order created')
    })
}