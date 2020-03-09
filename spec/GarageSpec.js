describe ('Garage', function(){
  var garage;

  beforeEach(function(){
    garage = new Garage();
    bike = jasmine.createSpy()
  })

  describe('storeBike', function(){
    it('should store bikes in the garage', function(){
      bike = jasmine.createSpyObj('bike', ['reportBroken'])
      bike.reportBroken();
      expect(garage.storeBike(bike)).toEqual(1)
    });

    it('has a default capacity', function(){
      expect(garage.capacity).toEqual(20)
    });

    it('cannot store a bike when full', function(){
      for (var i = 0; i < garage.capacity; i ++) {
        garage.storeBike(bike)
      }
      expect(garage.storeBike(bike)).toEqual("The garage is full. It can't store another bike.")
    });
  });

  describe('fix', function(){
    it('should fix broken bikes', function(){
      bike = jasmine.createSpyObj('bike', ['reportBroken'])
      bike.reportBroken();
      garage.storeBike(bike)
      expect(garage.fix()).toEqual('All fixed!')
    });
  });

  describe('releaseBikeForVan', function(){
    it('should release a fixed bike', function(){
      bike = jasmine.createSpyObj('bike', ['reportBroken'])
      bike.reportBroken();
      garage.storeBike(bike)
      garage.fix()
      expect(garage.releaseBikeForVan()).toEqual(bike)
    });
  });

});
