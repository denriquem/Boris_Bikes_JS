describe("Docking Station", function(){
  var dockingStation;

  it('should release a bike', function(){
    dockingStation = new DockingStation();
    expect(dockingStation.releaseBike()).toEqual(jasmine.any(Object));
  });

  it('releases working bike', function(){
    dockingStation = new DockingStation();
    bike = dockingStation.releaseBike();
    expect(bike.isWorking()).toEqual(true);
  });

});
