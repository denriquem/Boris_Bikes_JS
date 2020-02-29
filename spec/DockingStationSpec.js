describe("Docking Station", function(){
  var dockingStation;

  beforeEach(function(){
      dockingStation = new DockingStation();
      bike = jasmine.createSpy();
  });

  describe('releaseBike', function(){

    it('should release a bike', function(){
      dockingStation.dock(bike);
      expect(dockingStation.releaseBike()).toEqual(bike);
    });

    it('releases working bike', function(){
      bike = jasmine.createSpyObj('bike', ['isWorking']);
      bike.isWorking.and.returnValue(true)
      dockingStation.dock(bike)
      bike = dockingStation.releaseBike();
      expect(bike.isWorking()).toEqual(true);
    });

    it('raises an error when there are no bikes availalbe', function(){
      expect(dockingStation.releaseBike()).toEqual('No bikes to release');
    });

  });

  describe('dock', function(){
    it('can dock a bike', function(){
    expect(dockingStation.dock(bike)).toEqual(1)
    });

    it('raises an error if station at capcity', function(){
    for (var i = 0; i < DEFAULT_CAPACITY; i++) {
      dockingStation.dock(new Bike());
    }
    expect(dockingStation.dock(bike)).toEqual('Cannot dock bike. The station is already at capacity')
    });

    it('has a defualt capacity', function(){
      expect(dockingStation.capcity).toEqual(DEFAULT_CAPACITY);
    });
  });

  describe('initialization', function(){
    it('has a variable capacity', function(){
      dockingStation = new DockingStation(50);
      for (var i = 0; i < 50; i++) {
        dockingStation.dock(bike);
      }
      expect(dockingStation.dock(bike)).toEqual('Cannot dock bike. The station is already at capacity')
    });

    it('defaults capacity', function(){
      for (var i = 0; i < DEFAULT_CAPACITY; i++) {
        dockingStation.dock(bike);
      }
      expect(dockingStation.dock(bike)).toEqual('Cannot dock bike. The station is already at capacity')
    });
  });
});
