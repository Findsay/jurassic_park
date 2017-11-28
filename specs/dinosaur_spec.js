var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

var dinosaur;

describe("Dinosaur", function(){
  beforeEach(function(){
    dinosaur = new Dinosaur("TRex", 1, 10);
  });

  it("should have a type", function(){
    assert.strictEqual(dinosaur.type, "TRex");
  });

  it("should have a number of offspring a year", function(){
    assert.strictEqual(dinosaur.offspring, 1);
  });

  it("should have an age", function(){
    assert.strictEqual(dinosaur.age, 10);
  });

  it("should have a breed age", function(){
    assert.strictEqual(dinosaur.breedAge, 8);
  })

  it("should be able to age", function(){
    dinosaur.itsMahBuffday();
    assert.strictEqual(dinosaur.age, 11);
  });

  it("should have baby dinos", function(){
    babyDino1 = new Dinosaur("TRex", 1, 0);
    var babyDinos = [babyDino1];
    assert.deepStrictEqual(dinosaur.haveBabyDinos(), babyDinos);
  });

});
