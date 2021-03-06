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

//Convert Hash to Array

function convertHashToArray(hash) {
  let a = Object.keys(hash);
  let b = Object.values(hash);
  let array = [];
  for (let i = 0; i < a.length; i++) {
    array.push([a[i], b[i]]);
  }
  return array.sort();
}

//Deep Freeze

Object.deepFreeze = function(object) {
  Object.freeze(object);
  for (var key in object) {
    if (typeof object[key] === "object") {
      Object.deepFreeze(object[key]);
    }
  }
};
