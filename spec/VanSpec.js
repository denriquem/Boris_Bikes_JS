describe('Van', function(){

  beforeEach(function(){
    van = new Van();
    bike = jasmine.createSpy()
    dockingStation = jasmine.createSpy()
  })

  describe('pickUp', function(){
    it('should pick up a bike from station', function(){
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
