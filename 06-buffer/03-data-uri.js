const log=console.log;
fs=require('fs');
http=require('http');
var d=fs.readFileSync('./qr-code.jpg').toString('base64');
log(d);
var html=http.createServer((req,res)=>{

}).listen(8080);

