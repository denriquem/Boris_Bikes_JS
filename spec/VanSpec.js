describe('Van', function(){

  beforeEach(function(){
    van = new Van();
    bike = jasmine.createSpy()
    dockingStation = jasmine.createSpy()
  })

  describe('getBikeFromStation', function(){
    it('should remove broken bike from station', function(){
    bike = jasmine.createSpyObj('bike', ['reportBroken'])
    bike.reportBroken()
    dockingStation = jasmine.createSpyObj('dockingStaiton', ['dock'])
    dockingStation.dock(bike)
    dockingStation = jasmine.createSpyObj('dockingStation', ['pop'])
    spyOn(van, 'getBikeFromStation').and.returnValue(bike)
    expect(van.getBikeFromStation(dockingStation)).toEqual(bike)
    });
  });

  describe('load', function(){
    it('should pick up a bike from station', function(){
      bike = jasmine.createSpyObj('bike', ['reportBroken'])
      dockingStation = jasmine.createSpyObj('dockingStaiton', ['dock'])
      bike.reportBroken()
      dockingStation.dock(bike)
      dockingStation = jasmine.createSpyObj('dockingStation', ['releaseBike'])
      spyOn(van, 'getBikeFromStation').and.returnValue(bike)
      bike = van.getBikeFromStation(dockingStation);
      expect(van.load(bike)).toEqual(1)
    });
  });

  describe('dropOff', function(){
    it('should drop off a bike at a garage', function(){
      van.load(bike)
      expect(van.dropOff()).toEqual(bike)
    });

    it('raises an error when there are no bikes to drop off', function() {
      expect(van.dropOff()).toEqual('no bikes to drop off!')
    });
  });


});
