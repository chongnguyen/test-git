function Cat(name, weight){
  this.name = name;
  this.weight = weight;
  this.stomach = [];
}
Cat.prototype.eat = function(mouse){
  this.stomach.push(mouse);
}

module.exports = Cat;