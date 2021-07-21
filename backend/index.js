const serverless = require('serverless-http')
const express = require('express')
const app = express()
const AWS = require('aws-sdk')
const uuid = require('uuid')
require('date-utils')
const dt = new Date()

const TABLE_NAME = process.env.TABLE_NAME
const dynamoDb = new AWS.DynamoDB.DocumentClient()

app.use(express.json({ strict: false }))

app.get('/', function (req, res) {
  console.log(process.env.ENV)
  res.send('Hello World!')
})

// Create endpoint
app.post('/create', function (req, res) {
  const data = JSON.parse(JSON.stringify(req.body))

  data.id = uuid.v1()
  data.createdAt = dt.toFormat('YYYYMMDDHH24MISS')

  const params = {
    TableName: TABLE_NAME,
    Item: data
  }

  dynamoDb.put(params, (error) => {
    if (error) {
      console.log(error)
      res.status(400).json({ error: 'Could not create' })
    }
    res.json(data)
  })
})

module.exports.handler = serverless(app)
