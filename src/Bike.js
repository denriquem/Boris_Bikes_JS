function Bike() {
}

Bike.prototype.isWorking = function() {
  if (this.broken == true) {
  return false
} else  {
  return true
}
}

Bike.prototype.reportBroken = function () {
  this.broken = true
  return 'Someone fix this broken bike!'
}

Bike.prototype.isBroken = function() {
  return this.broken
}
