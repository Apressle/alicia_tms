Template.shipment_form.onRendered
 Meteor.subscribe("shipments");

Template.shipment_form.helpers({
    'shipment_count': function(){
        var currentUserId = Meteor.userId();
        return Shipments.find().count()
    }

});
Template.shipment_form.events({
    'submit': function(event) {
        event.preventDefault();
        var shipment = Shipments._id;
        console.log (shipment);
        //var currentUserId = Meteor.userId();
        //Shipments.update({
        //    createdBy: currentUserId
        //});
        Session.set('shipment_ready', true);
        Session.get('shipment_ready');
        var ready = Session.get('shipment_ready')
        return console.log(ready);
    }
});

Template.provider_list.onRendered = function(){
    Providers.find().fetch();
};