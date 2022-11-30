
"use strict";

//include('general.css');
//include('main-menu.css');

var http = require('http');
//var fs = require('fs');
var express = require('express');
var router = express.Router();
const app = express();

//app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/public')));
var server = http.createServer(app);
server.listen(8080);
/*
http.createServer(function (req, res) {
	fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
*/
