'use strict';

console.log('Hello world1');

var x = 10;
var y = 15;
console.log(x * y);

//var msg = require("./msgs.js");
//console.log(msg.first);
//console.log(msg.second);
//console.log(msg());

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!!');
  }).listen(8080);