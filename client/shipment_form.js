Template.shipment_form.onRendered
Meteor.subscribe("shipments");

Template.shipment_form.helpers({
    'shipment_count': function(){
        var currentUserId = Meteor.userId();
        return Shipments.find().count()
    }

});
Template.shipment_form.events({
    'submit': function(event, tmpl) {
        event.preventDefault();
        autoform_generated_document_object = AutoForm.getFormValues('insert_shipment_form').insertDoc
        //autoform_generated_document_object.provider_id = {}
        autoform_generated_document_object.createdBy = Meteor.userId()

        Session.set('shipment_ready', autoform_generated_document_object);
        Session.get('shipment_ready');
        var ready = Session.get('shipment_ready')
        return console.log(ready);
    }
});