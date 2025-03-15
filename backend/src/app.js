const express = require('express');
const aiRoutes =require('./routes/ai.routes')
const cors = require('cors')


const app = express()

app.use(cors())

app.use(express.json())         // for json response else undefined

app.get("/", (req, res) => res.send("Helloo"))

app.use('/ai', aiRoutes)

module.exports = app