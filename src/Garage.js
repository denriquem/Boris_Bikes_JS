function Garage() {
  this.bikeRack = []
  this.capacity = 20;
}

Garage.prototype.storeBike = function(bike) {
  return this.bikeRack.push(bike)
}
