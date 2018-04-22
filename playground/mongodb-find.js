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

    // db.collection('ToDos').find({completed: true}).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err)=>{
    //      console.log(err)
    // })


    db.collection('ToDos').find().count().then((count)=>{
        console.log('Number of records: ', count)
    }, (err)=>{
         console.log(err)
    })


    //client.close()
})