Meteor.startup(function() {
    GoogleMaps.load();
});

Template.body.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('exampleMap', function(map) {
        // Add a marker to the map once it's ready
        var marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance
        });
    });
});

Template.body.helpers({
    exampleMapOptions: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(43.0541673,-89.4911041),
                zoom: 7
            };
        }
    }
});

Template.provider_list.onRendered = function(){
    Meteor.subscribe("providers")
    Meteor.subscribe("shipments")
};
Template.provider_list.helpers({
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
    }
});
Template.provider_list.events({
    'click .provider_listed': function(){
        var provider_id = this._id;
        Session.set('selected_provider', provider_id);
        Session.get('selected_provider');
        var selected_provider = Session.get('selected_provider');
        var latest_shipment = Shipments.find({}, {sort:{_id:-1}}, {limit:1});
        //var latest_shipment_id = latest_shipment._id
        //Shipments.update({_id:latest_shipment._id}, {provider_id: provider_id})
        //console.log("latest shipment = " + latest_shipment_id);
    }

});