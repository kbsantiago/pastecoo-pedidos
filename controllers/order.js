module.exports = app => {
    app.get('/orders', (req, res) => res.send('Server is up and running'))
}