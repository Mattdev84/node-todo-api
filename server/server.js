var express = require('express')
var bodyParser = require('body-parser')

let {mongoose} = require('./db/mongoose')
let {Todo} = require('./models/todo')
let {User} = require('./models/user')

var app = express()

app.use(bodyParser.json())

app.post('/todos', (req,res)=>{
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc)=>{
        res.send(doc)
    }, (err)=>{
        res.status(400).send(err)
    })
})

app.get('/todos', (req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos})
    }, (err)=>{
        res.status(400).send(err)
    })
})

app.listen(3000,()=>{
    console.log('App started. listening on port 3000')
})

module.exports = {app}