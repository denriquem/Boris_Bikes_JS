function DockingStation() {
  this.bike = [];
}

DockingStation.prototype.releaseBike = function() {
  if (this.isEmpty()) {
    return 'No bikes to release'
  } else {
  return this.bike.pop();
  }
}

DockingStation.prototype.dock = function(bike) {
  if (this.isFull()) {
    return 'Cannot dock bike. The station is already at capacity'
  } else {
  return this.bike.push(bike);
  }
}

DockingStation.prototype.isEmpty = function() {
  return this.bike.length == 0
}

DockingStation.prototype.isFull = function() {
  return this.bike.length >= 20
}
