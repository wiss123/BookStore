const mangoose = require('mongoose');

const user = mangoose.model('product',{
    price:{
        type:String
    },
    rating:{
        type:String
    },
    title:{
        type:String
    },
    author:{
        type:String
    },
    reviews:{
        type:String
    },
    image:{
        type:String
    },
    printLength:{
        type:String
    },
    PublicationDate:{
        type:String
    },
    inStock:{
        type:String
    }

})
module.exports = user;