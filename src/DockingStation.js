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
  return this.bike = bike;
}
