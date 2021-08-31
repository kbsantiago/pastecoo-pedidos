const appConfig = require('./src/config/appConfig')
const app = appConfig()

app.listen(3000, () => console.log('Server is up and running on port 3000'))

app.get('/', (req, res) => res.send('Server is up and running'))