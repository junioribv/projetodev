require("dotenv").config()
console.log(process.env.test)

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/car', function (req, res) {
  res.send('fox')
})

app.get('/cars/1', function (req, res) {
  res.send('fiat')
})

app.get('/cars/2', function (req, res) {
  res.send('doblo')
})

let counter = 0

app.get('/counter', function (req, res) {
    counter++
    res.send(`contador:${counter}`)
})

app.listen(3000)