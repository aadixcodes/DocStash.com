const express = require('express');
const { stat } = require('fs');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res){
     res.send("Welcome to Backend Development code!!");
})

app.listen(3000);stat