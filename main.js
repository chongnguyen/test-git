var Cat = require('./cat');
var Mouse = require('./mouse');
var Dog = require('./dog');
var Horse = require('./horse');

var mickey = new Mouse('mickey', 'orange');
var tom  = new Cat('tom', 2);
var dog = new Dog();
var horse = new Horse('van', 100);

try {
  tom.eat(dog);
} catch (error) {
  console.log(error);
}

horse.eat();
console.log(tom);