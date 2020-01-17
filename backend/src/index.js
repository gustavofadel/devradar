const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

const routes = require('./routes')
const { setWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setWebsocket(server)

mongoose.connect('mongodb+srv://gustavofadel:eshabib@cluster0-9em9v.mongodb.net/devradar?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)