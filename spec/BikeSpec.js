describe ('Bike', function(){
  var bike;

  it('should declare whether a bike is working', function(){
    bike = new Bike();
    expect(bike.isWorking()).toEqual(true);
  });

  it('should report when a bike is not working', function(){
    bike = new Bike();
    expect(bike.reportBroken()).toEqual('Someone fix this broken bike!')
  });
});
