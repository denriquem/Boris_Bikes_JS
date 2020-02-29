describe('Van', function(){

  beforeEach(function(){
    van = new Van();
    bike = jasmine.createSpy()
    dockingStation = jasmine.createSpy()
  })

  describe('pickUp', function(){
    it('should pick up a bike from station', function(){
      bike = jasmine.createSpyObj('bike', ['reportBroken'])
      dockingStation = jasmine.createSpyObj('dockingStaiton', ['dock'])
      bike.reportBroken()
      dockingStation.dock(bike)
      dockingStation = jasmine.createSpyObj('dockingStation', ['releaseBike'])
      dockingStation.releaseBike.and.returnValue(bike)
      bike = dockingStation.releaseBike();
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
