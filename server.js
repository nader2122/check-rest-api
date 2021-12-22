const express = require('express')
const app = express()
const connectDB = require('./config/conectDB')
require('dotenv').config()
const userRouter = require('./router/route');
//midleware body parser
app.use(express.json())

//connect with database 
connectDB()
const PORT= process.env.PORT || 5000

// create route middleware:

app.use('/api/contact',userRouter)



app.listen(PORT ,(error)=>{
    error ? console.log(error):console.log(`server is runnig in ${PORT}`)
})
