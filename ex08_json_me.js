var express = require("express");
var fs = require("fs");
var app = express();

app.get("/books", function(req, res){
    var file = fs.readFile(process.argv[3], function(error, data){
        if(error) return res.send(500);
        var fileToJson = JSON.parse(data);
        res.json(fileToJson);
    });
    
}).listen(process.argv[2]);
