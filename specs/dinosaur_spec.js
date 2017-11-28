var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

var dinosaur;

describe("Dinosaur", function(){
  beforeEach(function(){
    dinosaur = new Dinosaur("TRex", 1);
  });

  it("should have a type", function(){
    assert.strictEqual(dinosaur.type, "TRex");
  });

  it("should have a number of offspring a year", function(){
    assert.strictEqual(dinosaur.offspring, 1);
  });

});
