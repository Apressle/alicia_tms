Meteor.startup(function() {
    GoogleMaps.load();
});

Template.home.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('home_map', function(map) {
        // Add a marker to the map once it's ready
        var marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance
        });
    });
});

Template.home.helpers({
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