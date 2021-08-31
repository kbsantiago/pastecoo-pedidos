module.exports = app => {
    app.get('/orders', (req, res) => res.send('Get orders'))

    app.post('/orders', (req, res) => res.send('Create new order'))
}