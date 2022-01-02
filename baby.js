function Person(name, age){
  this.name = name;
  this.age = age;
  this.stomache = [];

}


Person.prototype.eat = function ( someFood ){
  if(this.stomache.length <= 9){
    this.stomache.push(someFood)
  }else{
    return 'I am not hungry'
  }
}

Person.prototype.poop = function (  ){
  this.stomache.length = 0;
}

Person.prototype.toString = function (  ){
  return `${this.name} -> ${this.age}`
}


function Baby(name,age,favoriteToy){
  Person.call(this,name,age);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Person.prototype;
Baby.prototype.play = function (  ){
  return `I am playing with ${this.favoriteToy}`
}


const Karina = new Baby('Karina',33,'superman');

console.log(lala.play())

