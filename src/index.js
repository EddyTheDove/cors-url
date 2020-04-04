import 'babel-polyfill';
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import express from 'express'
import { MainController } from './controller'

const app = express()
app.use(morgan('dev'))
app.use(cors ({ exposedHeaders: '*' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    return res.status(400).json({ error: 'This endpoint only supports POST requests' })
})

app.get('/', MainController.home)
app.post('/stocks', MainController.stocks)
app.post('/post', MainController.post)
app.post('/get', MainController.get)

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
    console.log(`App is listening on port ${ server.address().port }`)
})

export default app
