const express = require('express');
const router = express.Router();
const User = require('../models/user');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
 


router.post('/login',async(req,res)=>{
    data = req.body;
    usr = await User.findOne({ Email:data.Email})

    if (!usr){
        res.send({message:'notfound'})

    }else{
        validpass = bcrypt.compareSync(data.password,usr.password) // se il Password sono uguali tra nel database e del cliente.
        if (!validpass){
            res.send({message:'invalid'})
        }else{
           payload = {
            _id:usr._id,
            Email:usr.Email,
            name:usr.name
           }
           token = jwt.sign(payload,'1324567') // 1324657 :  secrekey
            res.status(200).send({message:"WelcomeBack ",token:token})  
            //res.status(200).send("WelcomeBack ")   
        }
       
    }
})





router.post('/register',async(req,res)=>{
    data =  req.body;
    usr = new User(data);
    check = await User.findOne({ Email:data.Email})
    if(check){
        res.send({message:'Exist'})
    }
    else{
    salt = bcrypt.genSaltSync(10);
    cryptedpass = await bcrypt.hashSync(data.password,salt)
    usr.password = cryptedpass;
    usr.save()
       .then((saved)=>{
        res.status(200).send(saved);
       })
       .catch((err)=>{
        res.status(400).send(err);
       })}
})


 
router.get('/getall',(req,res)=>{
    
     User.find()
         .then((users)=>{
            res.send({a:users})
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