const Contact = require('../models/contact');

exports.postContact = async(req,res)=>{
    try {
        const newContact = await Contact(req.body);
        // test email added or not

        if(!req.body.email){
        res.status(400).send({message:"email not added !"})
        return
        }
        // test eamil exist or not

        const user = await Contact.findOne({email:req.body.email})
        if(user){
            res.status(400).send({message:'user was exist and should be unique'})
            return
        }
        //save contact
        const response = await newContact.save()
        res.status(200).send({response:response, msg:'user is saved'})
        
       
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"user can not saved"})
        
    }
}