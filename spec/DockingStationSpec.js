describe("Docking Station", function(){
  var dockingStation;

  it('should release a bike', function(){
    dockingStation = new DockingStation();
    expect(dockingStation.releaseBike()).toEqual('bike');
  });

});
