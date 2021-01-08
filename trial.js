// const path = require("path");
const express=require("express")
const app=express()


app.set("view engine", "ejs");
app.use(express.static('static'))
// How can i show .env fie content on the console

// const secrett_key=process.env.SECRET_KEY
// const publishablee_key=process.env.PUBLISHABLE_KEY
// if(process.env.NODE_ENV!=='production'){
//     require('dotenv').load()
// }
// console.log(secrett_key)

const file=require('fs')
// const { error } = require('console')

app.get("/trial",function(req,res){
   file.readFile("static/JSON Items/Items.json",function (error,data){
    if (error){
        res.status(500).end()
    }
    else{
       res.render('trial.ejs',{
           items:JSON.parse(data)
        })
    }
})

// app.render("/ttt",(req,res)=>{
//     res.render("trial")
})
app.listen(3000)


app.get("/womenskirt",(req,res)=>{
    file.readFile("static/JSON Items/Items.json",function(error,data){
      if(error){
        res.status(500).end
      }
      else{
        res.render('womenskirt.ejs',{
          items:JSON.parse(data)
        })
      }
    })
    })
    