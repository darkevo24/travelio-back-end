const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const titleModel = require("./models/title");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://darkevo24:Alvinyoyo9598@cluster0.wswom.mongodb.net/title?retryWrites=true&w=majority",{
    useNewUrlParser : true,
})

app.post("/",function(req,res){

    const title = req.body.title;

    const titleM = new titleModel({
        title : title
    });
    titleM.save();
    res.send(title);
})

app.listen(3001,function(){
    console.log("server running at 3001...");
})