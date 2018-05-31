const {ObjectId} = require('mongodb')

const {mongoose} = require('../server/db/mongoose')
const {Todo} = require('../server/models/todo')

var id = '5af8621db9172d0c97bd0b35'

if(!ObjectId.isValid(id)){
    console.log('Id is not valic')
}

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todos', todo)
// })


Todo.findById(id).then((todo)=>{
    if(!todo){
       return console.log('ID not found')
    }
    console.log('Todos', todo)
}).catch((e)=>{
    console.log(e)
})
