function Horse(name, weight){
  this.name = name;
  this.weight = weight;
}

Horse.prototype.eat = function(){
  console.log(this.name + ' is a herbivorous');
}

module.exports = Horse;