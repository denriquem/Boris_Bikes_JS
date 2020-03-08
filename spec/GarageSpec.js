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
  });
})
