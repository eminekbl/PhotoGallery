const express = require('express')
const config = require('dotenv').config()
const connectDB = require('./config/db')
const cors = require('cors')
const path = require('path')

//connectDB
connectDB()

const app = express()
const PORT = process.env.PORT || 5001


app.use(express.json())
app.use(cors())
app.use('/api/auth', require('./routers/auth'))
app.use('/api/private', require('./routers/private'))

app.get('/', (req, res) => {
    res.send("HELLO FROM ROOOOT")
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", index.html))
    })
}



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
