const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res){
     fs.readdir(`./files`, function(err, files){
          // console.log(files);
          res.render("index", {files: files});
     })
})

app.listen(3000);