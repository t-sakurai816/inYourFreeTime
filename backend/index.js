const serverless = require('serverless-http')
const express = require('express')
const app = express()
const AWS = require('aws-sdk')
const uuid = require('uuid')
require('date-utils')
const dt = new Date()
const cors = require('cors')
const { check, validationResult } = require('express-validator/check')
const TABLE_NAME = process.env.TABLE_NAME
const dynamoDb = new AWS.DynamoDB.DocumentClient()

app.use(express.json({ strict: false }))

const whitelist = ['https://stg-freetime.sakudev.net', 'https://freetime.sakudev.net', 'http://localhost:8080']

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

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
app.post('/create',
  [
    check('userName').not().isEmpty(),
    check('userName').isLength({ max: 30 }),
    check('title').not().isEmpty(),
    check('title').isLength({ max: 30 }),
    check('desc').not().isEmpty(),
    check('desc').isLength({ max: 30 }),
    check('age').toInt(),
    check('gender').isIn(['🚹', '🚺', ''])
  ],

  function (req, res) {
    const data = JSON.parse(JSON.stringify(req.body))
    const errors = validationResult(req)
    /// /////////////////////////////////////
    // 面白いコード
    /// /////////////////////////////////////
    // 複製
    const clonedata = { ...data }
    // 複製したデータから正規のプロパティを削除
    delete clonedata.title
    delete clonedata.desc
    delete clonedata.userName
    delete clonedata.age
    delete clonedata.gender

    // 正規のデータ以外が入っていた場合、空になっていないということが怒るので、それはエラー
    if (JSON.stringify(clonedata).length !== 2) {
      return res.status(422).json({ error: 'Fuck🖕' })
    }

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

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
