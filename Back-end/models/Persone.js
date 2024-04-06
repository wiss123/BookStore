const mangoose = require('mongoose');

const user = mangoose.model('Persone',{
    name:{
        type:String
    },
    image:{
        type:String
    }

})
module.exports = user;