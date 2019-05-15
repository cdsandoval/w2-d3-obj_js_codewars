//Super Class Extension

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " makes a noise, ";
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return super.speak() + this.name + " goes meow.";
  }
}

//Singleton Pattern

var Singleton = function() {
  // implement singleton Class

  if (typeof Singleton.instance === "object") {
    return Singleton.instance;
  }

  this.test;

  Singleton.instance = this;
};
