Template.shipment_form.onRendered
 //Meteor.subscribe("shipments")

Template.shipment_form.helpers({
    'shipment_count': function(){
        var currentUserId = Meteor.userId();
        return Shipments.find
    }

});
Template.shipment_form.events({
    'submit': function() {
        var shipment = Shipments._id;
        console.log (shipment);
        var currentUserId = Meteor.userId();
        Shipments.insert({
            createdBy: currentUserId
        })
        Session.set('shipment_ready', true);
        Session.get('shipment_ready');
        var ready = Session.get('shipment_ready')
        return console.log(ready);
    }
});