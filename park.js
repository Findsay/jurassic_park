var Park = function(){
  this.dinosaurs = [];
}

Park.prototype = {
  dinosaurCount: function(){
    return this.dinosaurs.length;
  },
  add: function(dinosaur){
    this.dinosaurs.push(dinosaur);
  },
  removeAll: function(dinosaurType){
    for (var i = this.dinosaurCount()-1; i >= 0; i--){
      if (this.dinosaurs[i].type === dinosaurType){
        this.dinosaurs.splice(i, 1);
      }
    }
  },
  getDinoOffspring: function(){
    var resultArray = [];
    for (dinosaur of this.dinosaurs){
      if(dinosaur.offspring > 1){
        resultArray.push(dinosaur);
      }
    }
    return resultArray;
  },
  xYearsPass: function(years){
    for (i = 0; i < years; i ++){
      for (dinosaur of this.dinosaurs){
        dinosaur.itsMahBuffday();
        if (dinosaur.age >= dinosaur.breedAge){
          var dinoBabies = dinosaur.haveBabyDinos();
          for (baby of dinoBabies){
            this.add(baby);
          }
        }
      }
    }
  }

};

module.exports = Park;
