const mongoose = require('mongoose');
require('dotenv').config({path:'./config/.env'})

//DB_URI ='mongodb://localhost:27017/Contact';

const connectDB = async()=>{
    try {
        const connect = await mongoose.connect(process.env.DB_URI);
        console.log('database is connected ...')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB ;