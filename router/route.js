const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const checkContact = require('../checkContact/check');

//GET :  RETURN ALL USERS 

router.get('/',async(req,res)=>{
try {
    const getAllContact = await Contact.find()
    res.status(200).send({response:getAllContact, msg:'get all contacts'})

} catch (error) {
    res.status(500).send({message:error})
}
})

//POST :  ADD A NEW USER TO THE DATABASE

router.post('/',checkContact.postContact)

// GET : Return contact by id
router.get('/:id',async(req,res)=>{
    try {
        const getContactId = await Contact.findOne({_id:req.params.id})
        res.status(200).send({response:getContactId, msg:'get contact by id'})
    
    } catch (error) {
        res.status(500).send({message:error})
    }
    })

//    PUT : EDIT A USER BY ID 

router.put('/:id',async(req,res)=>{
    try {
        const updateContact = await Contact.updateOne({_id:req.params.id},{$set:{...req.body}})
        updateContact.nModified ? res.status(404).send({message:'contact not cheked to updated'}) : res.send({message:'contact was updated'})
    
    } catch (error) {
        res.status(500).send({message:error})
    }
    })

// DELETE : REMOVE A USER BY ID 
router.delete('/:id',async(req,res)=>{
try {
    const deleteContact = await Contact.deleteOne({_id:req.params.id})
    deleteContact ? res.status(200).send('contact was deleted'):res.status(400).send('contact not found with this id')
} catch (error) {
    res.status(500).send({message:error})
}

})





module.exports = router 

