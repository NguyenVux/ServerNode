let express = require("express");
let path = require("path");
let app = express();
let port = 80;



app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"static/"),{index:"true"}));



app.get("/",(req,res)=>
{
  console.log(`Processing Request to Services /`);
  res.render("index.ejs");
});

app.get("/projects/:page",(req,res)=>
{
  let file = req.params["page"] + ".ejs";
  console.log(`Processing Request to ${req.params["page"]}`);
  res.write(file);
  res.end();
});

app.get("/projects",(req,res)=>
{
  res.render("projects.ejs");
});

app.get("/services",(req,res)=>
{
  res.render("services.ejs");
});

app.listen(port,()=> console.log("Listen at port: "+port));
