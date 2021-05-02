const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true,
 })
 );

 const user=require("./route/route")

mongoose.connect("mongodb+srv://admin:admin@cluster0.w6pyi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(()=>console.log("DB is connected"))
.catch(err=>console.log("db connection fail",err))

   

app.get('/',(req,res,next)=>{
    res.json({
        message:"SErver is working"
    })
   
})
app.use("/user",user)
 app.listen(PORT, () => {
         console.info(`App is running at ${PORT}`);
     }); 
