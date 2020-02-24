describe("Docking Station", function(){
  var dockingStation;

  describe('releaseBike', function(){
    it('should release a bike', function(){
      dockingStation = new DockingStation();
      bike = new Bike();
      dockingStation.dock(bike);
      expect(dockingStation.releaseBike()).toEqual(bike);
    });

    it('releases working bike', function(){
      dockingStation = new DockingStation();
      bike = new Bike();
      dockingStation.dock(bike)
      bike = dockingStation.releaseBike();
      expect(bike.isWorking()).toEqual(true);
    });

    it('can dock a bike', function(){
      bike = new Bike();
      dockingStation = new DockingStation();
      expect(dockingStation.dock(bike)).toEqual(bike)
    });

    it('raises an error when there are no bikes availalbe', function(){
      dockingStation = new DockingStation();
      expect(dockingStation.releaseBike()).toEqual('No bikes to release');
    });
  });
});
