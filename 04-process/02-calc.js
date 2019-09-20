console.log(process.argv.length);
console.log(process.argv);
var f=process.argv[2];
console.log(f,'=',eval(f));
const m=['name','email','QQ'];
var u={},i=0;
console.log(m[i]+':');
process.stdin.on('data',function(data){
  u[m[i]]=data.slice(0,data.length-1).toString('utf8');
  console.log(m[++i]+':');
});
process.stdin.on('end',function(data){});
