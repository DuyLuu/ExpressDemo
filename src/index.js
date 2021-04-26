const express = require('express')
const mongoose = require('mongoose')

const app = express()

const mongoUri = 'mongodb+srv://admin:duyluu@cluster0.b4zbi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
mongoose.connection.on('connected', () => {
    console.log('Connected to mongoose instance')
})
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongoose', err)
})

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})