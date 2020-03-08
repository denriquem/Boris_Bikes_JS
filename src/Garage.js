function Garage() {
  this.bikeRack = []
}

Garage.prototype.storeBike = function(bike) {
  return this.bikeRack.push(bike)
}
