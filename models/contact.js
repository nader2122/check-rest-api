const mongoose = require('mongoose');

const {Schema , model} = mongoose ;

const contactSchema = new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now()
    }
})

module.exports= Contact = model('Contact',contactSchema);