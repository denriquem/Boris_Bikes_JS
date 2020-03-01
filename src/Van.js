function Van() {
  this.bikeStore = []
  this.capacity = 4
}

Van.prototype.load = function(bike) {
  if (this.isFull()) {
    return "The van is already full. It can't load another bike"
  } else {
  return this.bikeStore.push(bike)
  }
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

Van.prototype.isFull = function() {
  return this.bikeStore.length >= this.capacity
}
