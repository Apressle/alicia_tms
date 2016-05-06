//Meteor.startup(() => {
  // code to run on server at startup
//});
Meteor.methods({

    shipment_insert: function(shipment){
        check(this.userId, String)
    }
});