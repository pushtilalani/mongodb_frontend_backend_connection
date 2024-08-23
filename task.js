var express = require('express');
var app=express();
const mg=require("mongoose")

mg.connect("mongodb://127.0.0.1:27017/login").then(()=>{console.log("successful")}).catch((err)=>{console.error(err)})

mg.pluralize(null)

const mySchema=new mg.Schema({
    uname:{
        type:String,
        required:true
    },
    pwd:{
        type:String,
        required:true
    }
})

const person=new mg.model("data1",mySchema)

app.use(express.static(__dirname,{index:"form.html"}))

app.get("/process_get",(req,res)=>{
    const personData=new person({
        uname:req.query.uname,
        pwd:req.query.pwd
    })
    personData.save()
    res.send("Record inserted")
})
app.listen(4000)