const express=require('express')
const cors=require('cors');
const { db } = require('./db/db');
const {readdirSync}=require('fs')
const app=express()

//middleware
app.use(express.json())
app.use(cors())

//router
readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/' + route)))


require('dotenv').config()

const PORT=process.env.PORT

const server=()=>{
    db()
    app.listen(PORT,()=>{
        console.log( `Server is running on port ${PORT}`)
    })
}

server()