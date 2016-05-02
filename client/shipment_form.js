Template.shipment_form.onRendered
    Meteor.subscribe("shipments");

Template.shipment_form.helpers({
    'shipment_count': function(){
        var currentUserId = Meteor.userId();
        console.log("current user " + currentUserId);
        var number = Shipments.find({}).count()
        //var number = Shipments.find({createdBy: currentUserId}).count()
        return number
    }
});

Template.shipment_form.events({
    'submit': function(event) {
        event.preventDefault();
        autoform_generated_document_object = AutoForm.getFormValues('insert_shipment_form').insertDoc
        //autoform_generated_document_object.provider_id = {}
        autoform_generated_document_object.createdBy = Meteor.userId()
        console.log("createdBy " + autoform_generated_document_object.createdBy)
        Session.set('shipment_ready', autoform_generated_document_object);
        Session.get('shipment_ready');
        sAlert.success("Your shipment has been submitted! Your providers will be available next.");
        var ready = Session.get('shipment_ready')
        return console.log(ready);
    },
    'demo': function(event){
        autoform_inserted_doc_object = AutoForm.get

    }
});