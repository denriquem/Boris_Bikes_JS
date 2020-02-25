function DockingStation() {
  this.bike;
}

DockingStation.prototype.releaseBike = function() {
  if (this.bike == undefined) {
    return 'No bikes to release'
  } else {
  return this.bike;
  }
}

DockingStation.prototype.dock = function(bike) {
  if (this.bike !== undefined) {
    return 'Cannot dock bike. The station is already at capacity'
  } else {
  return this.bike = bike;
  }
}
