describe("simple gagarin test", function() {
    var app = meteor({favor: "fiber"});
    var client = browser({flavor: "fiber", location: app});

    it("should be passed", function() {
     var serverVal = app.execute(function(){
         return 10;
     });
     var clientVal = client.execute(function(val1, val2) {
         return 10;
     });
        expect(serverVal).to.equal(clientVal);
    })
   //it("should be passed", function(){
   //    var this_is_9 = 9;
   //    var this_is_1 = 1
   //    var value = app.execute(function(val1, val2){
   //        return val1 + val2;
   //    }, [this_is_9, this_is_1]);
   //
   //   expect(10).to.equal(10);
   //});
});

