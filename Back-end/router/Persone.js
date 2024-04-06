const express = require('express');
const router = express.Router();
const User = require('../models/Persone');

 

router.post('/getall',async(req,res)=>{
    User.find()
         .then((users)=>{
            res.send({get:users})
         })
         .catch((err)=>{
            res.send(err)
         })
})





module.exports = router;