const expect = require('expect')
const request = require('supertest')

let {app} = require('./../server')
let {Todo} = require('./../models/todo')

beforeEach((done)=>{
    Todo.remove({}).then(()=>{
        done()
    })
})

describe('POST /todos', ()=>{
    it('should create a new todo', (done)=>{
        var text = 'Todo testing run'

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res)=>{
                expect(res.body.text).toBe(text)
            })
            .end((err, res)=>{
                if(err){
                    
                    return done(err)
                }
            
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(1)
                expect(todos[0].text).toBe(text)
                done()
            }).catch((err)=>{
                done(err)
            })
        })
    })

    it('Should not create a todo with an invalid body', (done)=>{
        
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res)=>{
            if(err){
                    
                return done(err)
            }
        
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(0)
                done()
            }).catch((err)=>{
                done(err)
            })


        })        
    })
})