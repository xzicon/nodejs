#!/usr/bin/node
function circle(radius){
  function area(){

    return Math.PI*radius*radius;
  }
  function circumferencr(){
    return 2*radius*Math.PI;
  }
  return{
    area:area,
    circumferencr:circumferencr
  }
}
console.dir(module);
module.export=circle;
