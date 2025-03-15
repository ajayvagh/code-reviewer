const express = require('express');
const aiRoutes =require('./routes/ai.routes')

const app = express()

app.use(express.json())         // for json response else undefined

app.get("/", (req, res) => res.send("Helloo"))

app.use('/ai', aiRoutes)

module.exports = app