#!/usr/bin/node
const http=require('http');
http.creatServer(req,res)=({
  res.end('hello!');
}).listen(8000);
