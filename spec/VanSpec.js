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

  describe('pickUp', function(){
    it('should pick up a bike from station', function(){
      bike = jasmine.createSpyObj('bike', ['reportBroken'])
      dockingStation = jasmine.createSpyObj('dockingStaiton', ['dock'])
      bike.reportBroken()
      dockingStation.dock(bike)
      dockingStation = jasmine.createSpyObj('dockingStation', ['releaseBike'])
      spyOn(van, 'getBikeFromStation').and.returnValue(bike)
      bike = van.getBikeFromStation(dockingStation);
      expect(van.pickUp(bike)).toEqual(1)
    });
  });

  describe('dropOff', function(){
    it('should drop off a bike at a garage', function(){
      van.pickUp(bike)
      expect(van.dropOff()).toEqual(bike)
    });
  })


});
