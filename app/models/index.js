import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserModel from './userModel.js'
import TodoModel from './todoModel.js'
import BoardModle from './boardModel.js'
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.User = UserModel(mongoose)
db.Todo = TodoModel(mongoose)
db.Board = BoardModle(mongoose)
export default db