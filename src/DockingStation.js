function DockingStation() {
  this._bike = new Bike();
}

DockingStation.prototype.releaseBike = function() {
  console.log(this._bike)
  return this._bike
}
