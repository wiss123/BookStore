const express = require('express');
const router = express.Router();
const User = require('../models/product');

//const product = require('../models/product');


router.get('/getall',(req,res)=>{
    
     User.find()
         .then((users)=>{
            res.json({GetProduct:users})
            {/* res.send(users) */}
         })
         .catch((err)=>{
            res.send(err)
         })
});



router.get('/getbyid/:id',async(req,res)=>{
    myid = req.params.id;
    User.findOne({_id:myid})
        .then((user)=>{
            res.send(user)
        }) 
        .catch((err)=>{
            res.send(err)
        })
})

 

module.exports = router;