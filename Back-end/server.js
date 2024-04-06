const express =  require('express'); // for use functions in express file
const cors = require('cors');
 

/*
const mongoose = require('mongoose');
mongoose.connect( //to connect to DB
    "mongodb+srv://wissamaliahmad:michoshow@myfirstcluster.k65kafo.mongodb.net/?retryWrites=true&w=majority&appName=MyfirstCluster"
).then(()=>{
console.log("succefully connect to database")
}).catch(()=>{
    console.log("Error with connecting with the db")
})
 
*/




const productRoute = require('./router/product');
const userRoute = require('./router/user');
const contactRoute = require('./router/contact');
const PersoneRoute = require('./router/Persone');

require('./config/connect');

const app = express();

app.use(cors());

app.use(express.json());

 /**app.get("/hello",(req,res)=>{
 res.send("hello")//se in caso il cliente ha aperto /hello si risponde di hello
 })// ():for request and response
**/

//http://127.0.0.1:3000/user/create

app.use('/product',productRoute);
app.use('/user',userRoute);
app.use('/contact',contactRoute);
app.use('/Persone',PersoneRoute);
 


app.listen(8000,()=>{//8000 è un port

    console.log('server work')
});