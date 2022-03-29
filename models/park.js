const Park = function(parkName, ticketPrice){
    this.parkName = parkName;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};

Park.prototype.addDinos = function(dino){
    this.dinosaurs.push(dino);
}

Park.prototype.removeDinos = function(dino){
    let index = this.dinosaurs.indexOf(dino);
    this.dinosaurs.splice(index, 1);
}

Park.prototype.favouriteDino = function(){
    this.dinosaurs.sort(function(a, b){
        return b.guestsAttractedPerDay-a.guestsAttractedPerDay;
    })
    return this.dinosaurs[0];
}

Park.prototype.searchDinoBySpecies = function(species){
    const dinosOfSpecies = [];
    for(let dino of this.dinosaurs){
        if (dino.species === species){
            dinosOfSpecies.push(dino);
        };
    };
    return dinosOfSpecies;
};

Park.prototype.totalDailyVisitors = function(){
    let total = 0;
    for(let dino of this.dinosaurs){
        total += dino.guestsAttractedPerDay;
    }
    return total;
}

module.exports = Park;