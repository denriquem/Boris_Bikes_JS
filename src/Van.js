function Van() {
  this.bikeStore = []
}

Van.prototype.pickUp = function(bike) {
  return this.bikeStore.push(bike)
}

Van.prototype.dropOff = function() {
  return this.bikeStore.pop()
}
