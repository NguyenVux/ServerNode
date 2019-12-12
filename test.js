let express = require("express");
let app = express();

let port = 80;
app.get("/",(req,res)=>
{
  res.send("hello");
});

app.listen(port,()=> console.log("Listen at port: "+port));