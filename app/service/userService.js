import db from '../models/index.js'
import express from 'express'

export default function UserService(){
    const User = db.user

    return{
        join(req, res){
            console.log(' ### 진행4: 노드서버에 진입함' + JSON.stringify(req.body))
            new User(req.body).save(()=>{
            res.status(200).json({'result': 'ok'})
            })
        },
        getUsers(_req, res){
            User.find()
            .exec((err, users) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({ success : true, users})
            })
        },
        profile(req, res){
            console.log(`### user profile access ###`)
            User.find({userid: req.params.id})
            .exec((err, user) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, user })
            })
        },
        login(req, res){
            console.log(`### user login access ###`)
            User.find({userid: req.params.id, password: req.params.password})  
            .exec((err, user) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, user })
            })
        }
    }
}
