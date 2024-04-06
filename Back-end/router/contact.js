const express = require('express');
const router = express.Router();
const User = require('../models/contact');



 


router.post('/add',async(req,res)=>{
    data = req.body;
    user = new User(data);
    
    user.save()
         .then((SavedUser)=>{
            res.send("Done")
         })
         .catch((err)=>{
            res.send(err)
         })
})





module.exports = router;