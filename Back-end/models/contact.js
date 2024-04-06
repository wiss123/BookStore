const mangoose = require('mongoose');

const user = mangoose.model('contact',{
    Name:{
        type:String
    },
    Subject:{
        type:String
    },
     
    Email:{
        type:String
    },
    Message:{
        type:String
    }

})
module.exports = user;