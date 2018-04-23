const {MongoClient, ObjectId} = require('mongodb');

var obj = new ObjectId()
console.log('loglog')
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to the database server')
    }
    console.log('Connected to Mongo DB Server')

    const db = client.db('TodoApp')


    db.collection('ToDos').deleteMany({text: 'Say hello to the world'}).then((result)=>{
        console.log(result)
    })


    //client.close()
})