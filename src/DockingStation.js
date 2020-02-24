function DockingStation() {
}

DockingStation.prototype.releaseBike = function() {
  return new Bike();
}

DockingStation.prototype.dock = function(bike) {
  return this.bike = bike;
}

DockingStation.prototype.bike = function() {
  return this.bike;
}
