var Mouse = require('./mouse');

function Cat(name, weight){
  this.name = name;
  this.weight = weight;
  this.stomach = [];
}
Cat.prototype.eat = function(mouse){
  if(mouse instanceof Mouse){
    this.stomach.push(mouse);
  } else {
    throw 'Cat only can eat mouse!';
  }
}

module.exports = Cat;