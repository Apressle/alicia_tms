Template.provider_page.onRendered = function(){
    //Meteor.subscribe("providers")
    Session.get('shipment_ready')
    var shipment_ready = Session.get('shipment_ready')
    console.log(shipment_ready + " is shipment_ready")
};
Template.provider_page.helpers({
    provider: function() {
        return Providers.find();
    },
    'selected': function(){
        var provider_id= this._id;
        //console.log(provider_id);
        var selected_provider = Session.get('selected_provider');
        if(provider_id == selected_provider){
            return "selected"
        }
    },
    'shipment': function(){
        Shipments.find({}, {sort:{created_on:-1}});
        return Shipments.findOne({});
    }
});
Template.provider_page.events({
    'click .provider_listed': function(){
        var provider_id = this._id;
        Session.set('selected_provider', provider_id);
        Session.get('selected_provider');
        var selected_provider = Session.get('selected_provider');
        var latest_shipment = Shipments.find({}, {sort:{_id:-1}}, {limit:1});
        //var latest_shipment_id = latest_shipment._id
        //Shipments.update({_id:latest_shipment._id}, {provider_id: provider_id})
        //console.log("latest shipment = " + latest_shipment_id);
    },
    'click .delete': function(e) {
        e.preventDefault();
        if (confirm("Delete this post?")) {
            var currentPostId = this._id;
            Providers.remove(currentPostId);
            //Router.go('postsList');
        }
    }
});