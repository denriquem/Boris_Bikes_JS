function Garage() {
  this.bikeRack = []
  this.capacity = 20;
}

Garage.prototype.storeBike = function(bike) {
  if (this.isFull()) {
    return "The garage is full. It can't store another bike."
  } else {
    return this.bikeRack.push(bike)
  }
}

Garage.prototype.fix = function() {
  this.bikeRack
  for (var i = 0; i < this.bikeRack.length; i ++) {
      this.bikeRack[i].broken = false
  }
  return 'All fixed!'
}

Garage.prototype.releaseBikeForVan = function() {
  return this.bikeRack.pop();
}

Garage.prototype.isFull = function() {
  return this.bikeRack.length >= this.capacity
}
