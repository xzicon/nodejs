const c=require('./02-export-object'),
      log=console.log;
log(
    'r=10,c diameter:',c.area(10)
   );
log('r=10,c area:',c.area(10));
console.dir(module);
