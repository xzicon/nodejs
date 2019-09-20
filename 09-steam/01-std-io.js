#!/usr/bin/node
const stdin=process.stdin;
const stout=process.stdout;
stdin.resume();
stdin.on('data',function(data){
  stout.write(data.toString('utf8').toUpperCase());
});
stdin.on('end',function(data){
  stdout.end()
});

