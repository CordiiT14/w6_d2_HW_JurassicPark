const Park = function(parkName, ticketPrice){
    this.parkName = parkName;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};

Park.prototype.addDinos = function(dino){
    this.dinosaurs.push(dino);
}

module.exports = Park;