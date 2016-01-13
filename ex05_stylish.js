var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(require("stylus").middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2]);