let express = require("express");
let path = require("path");
let app = express();

let port = 80;
let dir = path.join(__dirname,`static//`);
app.use(express.static(path.join(__dirname,"static/"),{index:"true"}));
app.get("/",(req,res)=>
{
  res.sendFile(path.join(dir));
});

app.listen(port,()=> console.log("Listen at port: "+port));
