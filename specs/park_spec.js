var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');

var park, dino1, dino2, dino3, dino4, dino5;

describe("Park", function(){
  beforeEach(function(){
    park = new Park();
    dino1 = new Dinosaur("TRex", 1, 10);
    dino2 = new Dinosaur("TRex", 1, 9);
    dino3 = new Dinosaur("Velociraptor", 4, 8);
    dino4 = new Dinosaur("Velociraptor", 4, 7);
    dino5 = new Dinosaur("Triceratops", 2, 3);
  });

  it("should start empty", function(){
    assert.strictEqual(park.dinosaurCount(), 0);
  });

  it("should be able to add a dinosaur", function(){
    park.add(dino1);
    assert.strictEqual(park.dinosaurCount(), 1);
  });
  it('should be able to remove dinosaur by type', function(){
    park.add(dino1);
    park.add(dino2);
    park.removeAll("TRex");
    assert.strictEqual(park.dinosaurCount(), 0);
  });
  it("should get all dinosaurs who have more tha 2 offspring annually", function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    park.add(dino4);
    park.add(dino5);
    var offspringOf2orMore = [dino3, dino4, dino5];
    assert.deepStrictEqual(park.getDinoOffspring(), offspringOf2orMore);
  });

  it("should calculate number of dinosaurs after year one, starting with 1", function(){
    park.add(dino1);
    park.xYearsPass(1);
    assert.strictEqual(park.dinosaurCount(), 2);
  });

  it("should calculate number of dinosaurs after 2 years, starting with 1", function(){
    park.add(dino1);
    park.xYearsPass(2)
    assert.strictEqual(park.dinosaurCount(), 3);
  });

});
