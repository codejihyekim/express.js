import db from '../models/index.js'
import express from 'express'

export default function BoardService(){
    const Board = db.board
    return{
        addBoard(req, res){
            new Board(req.body).save(()=>{
                res.status(200).json({'result': 'ok'})
            })
        },
        getBoard(req, res){
            console.log(`boardController access !!!`)
            Board.find()
            .exec((err, boards) => {
                if(err) return res.status(400).send(err)
                res.status(200).json({ success: true, boards})
                
            })
        }
    }
}