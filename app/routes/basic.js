import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import BasicService from "../service/basicService.js";

dotenv.config()

const corsOptions = {
    origin: 'http://localhost:3000', 
    optionsSuccessStatus: 200 
}

const app = express()
app.use(cors());

app.post('/bmi', cors(corsOptions), (req, res) => {
    const service = new BasicService()
    res.status(200).json(service.getBmi(req, res))
})
app.post('/calc', cors(corsOptions), (req, res) => {
    const service = new BasicService()
    res.status(200).json(service.getCalc(req, res))
})

export default app