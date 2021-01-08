

if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

// console.log(process.env.NODE_ENV)
const publicKey=process.env.PUBLISHABLE_KEY;
const secretKey=process.env.SECRET_KEY;

// console.log(publicKey,secretKey)


const path = require("path");
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const joi = require("joi");
const app = express();
const file=require("fs");
const { dirname } = require("path");
const stripe = require('stripe')("sk_test_51HL3XbJZ3nkvK0rCqjTVVeoc2oAwW7yrXCqj7tnO1J5CTkOk0ni7o07DEnqlbVg2iEssgHIPP8Xp0KbCirI8u3Gb00ZNG4CjRd");
app.set("view engine", "ejs");
app.use(express.json())



const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "zaraDB",
});
connection.connect((err) => {
  if (!!err) {
    console.log(err);
  } else {
    console.log("connectedd");
  }
});

app.use("/static", express.static(path.join(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "login.html"));
});
// app.get("/register.html", (req, res) => {
//   res.sendFile(path.join(__dirname, "static", "register.html"));
// });
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get('/static/cartinside.html',(req,res)=>{
  res.render("cartinside");
})


app.get("/womenskirt",function(req,res) {
  // console.log(req.params,"params")
  file.readFile("static/JSON Items/Items.json",function(error,data) {
    if(error)
    {
      res.status(500).end()
    }
    else{
      res.render("womenskirt",{
        items:JSON.parse(data)
      })
    }
    
  })
})

app.get("/static/cartinside.html",(req,res)=>{
// console.log(publicKey,"pUBLIKEY")
  res.render("cartinside",{
  
  publishable_key : "pk_test_51HL3XbJZ3nkvK0rCCFotW8vYL4v8qom9amnX21n7JHEVsZPxbS6GlCYr8yV5OtvAbAxrEnKZxvVI0mM5zE780fRb00JiilBpDU"

})
})



     
      app.post('/create-checkout-session',async(req,res)=>{
        //  console.log("req body",req.params)
         const domainUrl = process.env.DOMAIN
        //  console.log("req body",req.params)
        file.readFile("static/JSON Items/Items.json", async function(error,data) {
          if(error)
          {
            res.status(500).end()
          }
          else{
            const itemsJson = JSON.parse(data);
            // console.log(itemsJson,'itemsJson');
                const itemsArary = itemsJson.shirts.concat(itemsJson.size)
                let total = 0;
                let name =''
                let quantity = 0
       console.log(req.body,"body")
       console.log(itemsArary,"itemsArray")
       
                req.body.items.forEach(function(element){
                  const itemJson = itemsArary.find(function(i){
                      return i.id = element.id
                  //  console.log(i,"iiiiii")
                  //  console.log(element,"element")
                    })
                  console.log(itemJson,'price')
                  total = total + itemJson.price * element.quantity;
                  name = element.name,
                  quantity = element.quantity
                  // console.log("quantity",quantity)
          })  
          // console.log(req.body,'req.body')
          let lineItemsDemo = [{
              name: name,
              amount: total,
              quantity: quantity,
              currency: 'usd'
          }]
          
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            shipping_address_collection:{
                allowed_countries:['US']
            },
            line_items : lineItemsDemo,
            success_url: `https://localhost:4242/success?session_id=${CHECKOUT_SESSION_ID}`,
            cancel_url: `https://localhost:4242`,
          });
    
          res.json({sessionId:session.id})
          }
        })
        
   
      })
  


      // app.post('/static/cartinside.html', (req,res) => {
      //   res.render('cartinside.ejs'
      //  })

app.get('./success',(req,res)=>{
  res.render('success');
})




app.post("/register.html", (req, res) => {
  const data = {
    email: `${req.body.email}`,
    user_name: `${req.body.user_name}`,
    password: `${req.body.password}`,
    address: `${req.body.address}`,
    locality: `${req.body.locality}`,
    country: `${req.body.country}`,
    phone: `${req.body.phone}`,
    repeat_password: `${req.body.repeat_password}`,
    pincode: `${req.body.pincode}`,
    more_info: `${req.body.more_info}`,
    city: `${req.body.city}`,
  };

  const sql = `INSERT into user SET?`;
  connection.query(sql, data, (err, result) => {
    if (err ) {
      console.log(err);
    } else {
      console.log(result);
      res.redirect("/login.html");
    }
  });
});
app.post("/login.html", (req, res) => {
  const sql1 = `SELECT user_name from user  WHERE password="${req.body.password}" AND email="${req.body.email}"`;
  connection.query(sql1, [req.body.email, req.body.password], (err, result) => {
    var jsonparsed = JSON.parse(JSON.stringify(result));
    if (err) {
      console.log(err);
    } else if (jsonparsed == "") {
      res.redirect("/login.html");
      // console.log(jsonparsed);
    } else {
      res.render("index", (name = [jsonparsed[0].user_name]));
      console.log(jsonparsed[0]);
    }
  });
});
app.listen(3001);
