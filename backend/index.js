const serverless = require('serverless-http')
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  console.log(process.env.ENV)
  res.send('Hello World!')
})

module.exports.handler = serverless(app)
