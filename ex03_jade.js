var express = require("express");
var app = express();
var path = require("path");
console.log(process.argv[2]);
console.log(process.argv[3]);
app.set('view engine', 'jade');
app.set('views', process.argv[3]);
app.get('/home', function(req, res){
    res.render('index', {date: new Date().toDateString()});
}).listen(process.argv[2]);
