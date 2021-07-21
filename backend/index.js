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
  res.send(process.env.ENV)
})

// Get item from the table
app.get('/item/:id', function (req, res) {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id: req.params.id
    }
  }
  dynamoDb.get(params, (err, data) => {
    if (err) {
      console.log(err, err.stack)
      res.status(500).send(err)
    } else {
      res.send(data.Item)
    }
  })
})

// Get all items from the table
app.get('/items', function (req, res) {
  const params = {
    TableName: TABLE_NAME
  }
  dynamoDb.scan(params, function (err, data) {
    if (err) {
      console.log(err, err.stack)
      res.status(500).send(err)
    } else {
      res.send(data.Items)
    }
  })
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
