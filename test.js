let express = require("express");
let path = require("path");
let mongo_client = require("mongodb").MongoClient;

let username = "getDB";
let password = "18082001"
let db_url = `mongodb://${username}:${password}@128.199.255.12:27017/ServerNodeJs`;
let app = express();
let port = 80;



app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"static/"),{index:"true"}));



app.get("/",(req,res)=>
{
  console.log(`Processing Request to Services /`);
  res.render("index.ejs");
});


app.get("/projects",(req,res)=>
{
  let pj = [];
  mongo_client.connect(db_url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ServerNodeJs");
    dbo.collection("projects").find({}).toArray((err,docs)=>{
      if(err) throw err
      res.render("projects.ejs",{p:docs});
      db.close();
    });
  });  
});




app.get("/services",(req,res)=>
{
  res.render("services.ejs");
});

app.listen(port,()=> console.log("Listen at port: "+port));


