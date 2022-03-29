const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dino1;
  let dino2;
  let dino3;
  let dino4;

  beforeEach(function () {
    park = new Park('Jurassic Park', 15);
    dino1 = new Dinosaur('Velociraptor', 'Carnivore', 60);
    dino2 = new Dinosaur('Stegosaurus', 'Herbivore', 80);
    dino3 = new Dinosaur('Brontosaurus', 'Herbivore', 40);
    dino4 = new Dinosaur('Pterodactyl', 'Carnivore', 30);
    dino5 = new Dinosaur('Velociraptor', 'Carnivore', 45);
  });

  it('should have a name', function(){
    assert.strictEqual(park.parkName, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 15);
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.dinosaurs, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinos(dino1);
    park.addDinos(dino2);
    assert.deepStrictEqual(park.dinosaurs, [dino1, dino2]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinos(dino1);
    park.addDinos(dino2);
    park.removeDinos(dino1);
    assert.deepStrictEqual(park.dinosaurs, [dino2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinos(dino1);
    park.addDinos(dino2);
    park.addDinos(dino3);
    park.addDinos(dino4);
    const actual = park.favouriteDino();
    assert.strictEqual(actual, dino2);
  });

  it('should be able to find dinosaurs of a particular species', function (){
    park.addDinos(dino1);
    park.addDinos(dino2);
    park.addDinos(dino3);
    park.addDinos(dino4);
    let species = 'Pterodactyl';
    const actual = park.searchDinoBySpecies(species);
    assert.deepStrictEqual(actual, [dino4])
  });

  it('should be able to find all dinosairs of a particular species', function(){
    park.addDinos(dino1);
    park.addDinos(dino2);
    park.addDinos(dino5);
    let species = 'Velociraptor';
    const actual = park.searchDinoBySpecies(species);
    assert.deepStrictEqual(actual, [dino1 , dino5]);
  })

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinos(dino1);
    park.addDinos(dino2);
    park.addDinos(dino3);
    park.addDinos(dino4);
    const actual = park.totalDailyVisitors();
    assert.strictEqual(actual, 210);
  });


  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinos(dino1);
    park.addDinos(dino2);
    park.addDinos(dino3);
    park.addDinos(dino4);
    const actual = park.totalYearlyVisitors();
    assert.strictEqual(actual, 76650 );
  });


  it('should be able to calculate total revenue for one year', function(){
    park.addDinos(dino1);
    park.addDinos(dino2);
    park.addDinos(dino3);
    park.addDinos(dino4);
    const actual = park.yearlyRevenue();
    assert.strictEqual(actual, 1149750)
  });

  it('should remove all dinosaures of a given species', function(){
    park.addDinos(dino1);
    park.addDinos(dino2);
    park.addDinos(dino5);
    let species = 'Velociraptor';
    park.removeDinoOfSpecies(species);
    assert.deepStrictEqual(park.dinosaurs, [dino2]);
  });

});
