var Cat = require('./cat');
var Mouse = require('./mouse');
var Dog = require('./dog');

var mickey = new Mouse('mickey', 'orange');
var tom  = new Cat('tom', 2);
var dog = new Dog();
try {
  tom.eat(dog);
} catch (error) {
  console.log(error);
}

console.log(tom);