const mangoose = require('mongoose');

const user = mangoose.model('users',{//prende il nome "users" e si scrive sul Database 
    name:{
        type:String
    },
    lastname:{
        type:String
    },
    age:{
        type:Number
    },
    Email:{
        type:String
    },
    password:{
        type:String
    }

})
module.exports = user;