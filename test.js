let express = require("express");
let path = require("path");
let app = express();
let port = 80;
let dir = path.join(__dirname,`static//`);
app.use(express.static(path.join(__dirname,"static/"),{index:"true"}));
app.get("/",(req,res)=>
{
  console.log("Some one connected");
  res.render("index.ejs");
});

app.get("/services",(req,res)=>
{
  console.log("Some one connected");
  res.render("services.ejs");
});


app.listen(port,()=> console.log("Listen at port: "+port));
