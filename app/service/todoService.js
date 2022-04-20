import db from '../models/index.js'
import express from 'express'

export default function TodoService(){
    const Todo = db.todo
    return{
        addTodo(){
            console.log(' ### 진행4: 노드서버에 진입함' + JSON.stringify(req.body))
            new Todo(req.body).save(()=>{
            res.status(200).json({'result':'ok'})
            })
        },
        getTodo(){
            Todo.find()
            .exec((err, todos) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({ success: true, todos})
            }) 
        }
    }
}