const express = require("express");
const bodyparser = require("body-parser");
const bcrypt=require("bcrypt");
const app = express();
require('dotenv').config()
const db = require("./componnents/databasevariables/db")
const middleware = require("./componnents/utils/admin/middleware");


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static("public"));

db.connection();


//routes
app.use('/user',require('./routers/userrouter'));
app.use('/admin', require('./routers/adminrouter'));
// app.use('/instructor',require('./routers/instructorrouter'));

const port= process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.json({
      status:200,
      msg:"server is up and running!😘"
    });
});

app.all("*",(req,res)=>{
    res.status(404).json({
        success:false,
        msg:"page not found/ api does'nt exist 😒."
    });
});

app.listen(port ,()=>{
  console.log("server started "+port);
});