const db  = require('../models/index')
const TodoSchema = db.todo

exports.todo = (req, res) => {
    console.log(' ### 진행4: 노드서버에 진입함' + JSON.stringify(req.body))
    new TodoSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'})
    })
}

exports.todolist = (req, res) => {
    TodoSchema.find()
    .exec((err, todos) => {
        if(err) return res.status(400).send(err)
        res.status(200).json({ success: true, todos})
    })
}