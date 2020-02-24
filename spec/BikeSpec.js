describe ('Bike', function(){
  var bike;

  it('should respond declare whether a bike is working', function(){
    bike = new Bike();
    expect(bike.isWorking()).toEqual(true);
  });
  
});
