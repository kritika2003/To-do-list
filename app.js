const express= require("express");
const bodyparser = require("body-parser");
const date= require(__dirname +"/date.js");
const app= express();
var items=["Buy Food","Cook Food","Eat Food"];
let workitem=[];
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.get("/" , function(req,res){
  let day= date;
  res.render("list",{listTitle: day, newlistitem:items});
});
app.post("/", function(req, res){
  var item=req.body.newitem;
  if (req.body.list === "work"){
    workitem.push(item);
    res.redirect("/work");
  }
  else{
  items.push(item);
  res.redirect("/");
  }
});
app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work list", newlistitem:workitem})
});
app.get("/about",function(req,res){
  res.render("about");
});
app.listen(4000, function(){
  console.log("Server is up and running at port at 4000");
});
