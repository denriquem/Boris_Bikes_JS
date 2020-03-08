describe ('Garage', function(){

  beforeEach(function(){
    garage = new Garage();
  });

  describe('storeBike', function(){
    it('should store bikes in the garage', function(){
      bike = jasmine.createSpyObj('bike', ['reportBroken'])
      bike.reportBroken();
      expect(garage.storeBike(bike)).toEqual(1)
    });

    it('has a default capacity', function(){
      expect(garage.capacity).toEqual(20)
    })
  });

  describe('fix', function(){
    it('should fix broken bikes', function(){
    bike = jasmine.createSpyObj('bike', ['reportBroken'])
    bike.reportBroken();
    garage.storeBike(bike)
    expect(garage.fix()).toEqual('All fixed!')
    });
  });

})
