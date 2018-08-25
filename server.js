
var express = require('express');
var app = express();
var path = require('path');
var bodyParser=require('body-parser');

var port = process.env.port || 8080;
app.listen(port);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(function (req,res,next) {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Method','GET,PUT,POST,DELETE');
  next();
});
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/index.html')); 
});

app.get('/blog_i.html', function (req, res){
    res.sendFile(path.join(__dirname + "/blog_i.html"));
})