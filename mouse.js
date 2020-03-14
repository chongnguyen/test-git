function Mouse(name, color){
  this.name = name;
  this.color = color;
  this.dead = false;
}

Mouse.prototype.die = function(){
  this.dead = true;
}

module.exports = Mouse;