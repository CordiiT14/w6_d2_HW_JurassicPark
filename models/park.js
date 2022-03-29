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

module.exports = Park;