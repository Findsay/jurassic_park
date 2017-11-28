var Dinosaur = function(type, offspring, age){
  this.type = type;
  this.offspring = offspring;
  this.age = age;
  this.breedAge = 8;
};

Dinosaur.prototype = {
  itsMahBuffday: function(){
    this.age ++;
  },
  haveBabyDinos: function(){
    var resultArray =[];
    for (i = 0; i < this.offspring; i++){
      var babyDino = new Dinosaur(this.type, this.offspring, 0);
      resultArray.push(babyDino);
    }
    return resultArray;
  }
};

module.exports = Dinosaur;
