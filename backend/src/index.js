const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://gustavofadel:eshabib@cluster0-9em9v.mongodb.net/devradar?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)