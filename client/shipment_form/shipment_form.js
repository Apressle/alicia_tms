Template.shipment_form.onRendered
    Meteor.subscribe("shipments");
    Session.set('demo_shipment', false);

Template.shipment_form.helpers({
    'shipment_count': function(){
        var currentUserId = Meteor.userId();
        console.log("current user " + currentUserId);
        var number = Shipments.find({}).count()
        //var number = Shipments.find({createdBy: currentUserId}).count()
        return number
    },
    'demo': function(){
        Session.get('demo_shipment');
        var demo = Session.get('demo_shipment')
        return console.log(demo);
    }
});

Template.shipment_form.events({
    'submit': function(event) {
        event.preventDefault();
        var autoform_generated_document_object = AutoForm.getFormValues('insert_shipment_form').insertDoc
        //autoform_generated_document_object.provider_id =
        autoform_generated_document_object.createdBy = Meteor.userId();
        autoform_generated_document_object.created_on = new Date();
        console.log("createdBy " + autoform_generated_document_object.createdBy);
        Session.set('shipment_ready', autoform_generated_document_object);
        Session.get('shipment_ready');
        sAlert.success("Your shipment has been submitted! Your providers will be available next.");
        var ready = Session.get('shipment_ready');
        var shipment_id= autoform_generated_document_object._id
        //var shipment_id= Shipments.find(_id:(Session.get('shipment_ready')))
        Router.go('/provider_listing/:_id');
        return console.log(ready);
    },
    'click #demo_button': function(event){
        Session.set('demo_shipment', true);
        console.log("clicked");
        Meteor.call('demo_shipment_insert', Meteor.userId());
        Router.go('/provider_listing/:_id');
    }
});