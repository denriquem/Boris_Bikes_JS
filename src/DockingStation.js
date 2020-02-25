function DockingStation() {
  this.bike = [];
}

DockingStation.prototype.releaseBike = function() {
  if (this.bike.length == 0) {
    return 'No bikes to release'
  } else {
  return this.bike.pop();
  }
}

DockingStation.prototype.dock = function(bike) {
  if (this.bike.length >= 20) {
    return 'Cannot dock bike. The station is already at capacity'
  } else {
  return this.bike.push(bike);
  }
}
