const express = require("express");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.get("/", function(req, res){
 res.render("home");
});
app.get("/veg", function(req, res){
 res.render("veg");
});
app.get("/nonveg", function(req, res){
 res.render("nonveg");
});
app.get("/cart", function(req, res){
 res.render("cart");
});
app.get("/form", function(req, res){
 res.render("form");
});
let port= process.env.PORT;
if(port==null||port==""){
  port=3000;
}

app.listen(port, function() {
  console.log("Server started on port successfully");
});

//  res.render("veg");
//  res.render("nonveg");