const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to the database server')
    }
    console.log('Connected to Mongo DB Server')



const db = client.db('TodoApp')

// db.collection('ToDos').insertOne({
//     text: 'Say hello to the world again',
//     completed: false
// }, (err, result) => {
//     if(err)
//     {
//         return console.log('Unable to insert to collection')
//     }

//     console.log(JSON.stringify(result.ops))
// })

    db.collection('Users').insertOne({
        name: 'Matthew', 
        age: 34, 
        location: 'Liverpool'},
        (err, result)=>{
            if(err)
            {
                return console.log('Unable to create user record')
            }
            console.log('User record created: ' + JSON.stringify(result.ops))
        })
    client.close()
})