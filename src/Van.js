function Van() {
  this.bikeStore = []
}

Van.prototype.load = function(bike) {
  return this.bikeStore.push(bike)
}

Van.prototype.dropOff = function() {
  if (this.bikeStore.length == 0) {
    return 'no bikes to drop off!'
  } else {
  return this.bikeStore.pop()
  }
}

Van.prototype.getBikeFromStation = function(station) {
  return station.bike.pop()
}
