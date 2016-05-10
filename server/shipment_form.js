Meteor.methods({
   'demo_shipment_insert': function(userId){
       Shipments.insert({
           pickup_address_name: "Jason Swanson",
           ship_method: "truckload",
           client_name: "ClearView Supply Chain",
           pickup_address_street_1: "6417 Odana Rd.",
           pickup_address_street_2: "Suite #6",
           pickup_address_city: "Madison",
           pickup_address_state: "WI",
           pickup_address_zip: "53719",
           destination_address_name: "Brad Hollister",
           destination_address_street_1: "702 S Randall Ave",
           destination_address_city: "Madison",
           destination_address_state: "WI",
           destination_address_zip: "53715",
           ship_date: new Date(),
           total_weight: 1000,
           createdBy: userId,
           created_date: new Date()
       });
   },
    //Lists.find({}, {sort: {$natural:-1}, limit:1}).fetch()
    'get_latest_shipment': function(shipment){
       var shipment = Shipments.find({}, {sort: {$natural:-1}, limit:1}).fetch()
       return shipment
    },

    'random_new_shipment_generator': function(){
        die_roll = Math.floor(Math.random() * 7);
        switch (die_roll) {
            case 0:
                Shipments.insert({
                    pickup_address_name: "Jason Swanson",
                    ship_method: "truckload",
                    client_name: "ClearView Supply Chain",
                    pickup_address_street_1: "6417 Odana Rd.",
                    pickup_address_street_2: "Suite #6",
                    pickup_address_city: "Madison",
                    pickup_address_state: "WI",
                    pickup_address_zip: "53719",
                    destination_address_name: "Brad Hollister",
                    destination_address_street_1: "702 S Randall Ave",
                    destination_address_city: "Madison",
                    destination_address_state: "WI",
                    destination_address_zip: "53715",
                    ship_date: new Date(),
                    total_weight: 1000,
                    createdBy: userId,
                    created_date: new Date()
                });
                break;
            case 1:
                Shipments.insert({
                    pickup_address_name: "Jason Stevenson",
                    ship_method: "LTL",
                    client_name: "ClearView Paper",
                    pickup_address_street_1: "30 West Mifflin St.",
                    pickup_address_street_2: "Suite #701",
                    pickup_address_city: "Madison",
                    pickup_address_state: "WI",
                    pickup_address_zip: "53703",
                    destination_address_name: "Brad Hollister",
                    destination_address_street_1: "702 S Randall Ave",
                    destination_address_city: "Madison",
                    destination_address_state: "WI",
                    destination_address_zip: "53715",
                    ship_date: new Date(),
                    total_weight: 1000,
                    createdBy: userId,
                    created_date: new Date()
                });
                break;
            case 2:
                Shipments.insert({
                    pickup_address_name: "Jason Swanson",
                    ship_method: "truckload",
                    client_name: "ClearView Supply Chain",
                    pickup_address_street_1: "3642 Forest Run",
                    pickup_address_street_2: " ",
                    pickup_address_city: "Madison",
                    pickup_address_state: "WI",
                    pickup_address_zip: "53704",
                    destination_address_name: "Brad Hollister",
                    destination_address_street_1: "702 S Randall Ave",
                    destination_address_city: "Madison",
                    destination_address_state: "WI",
                    destination_address_zip: "53715",
                    ship_date: new Date(),
                    total_weight: 1000,
                    createdBy: userId,
                    created_date: new Date()
                });
                break;
            case 3:
                Shipments.insert({
                    pickup_address_name: "Jason Swanson",
                    ship_method: "truckload",
                    client_name: "ClearView Supply Chain",
                    pickup_address_street_1: "6417 Odana Rd.",
                    pickup_address_street_2: "Suite #6",
                    pickup_address_city: "Madison",
                    pickup_address_state: "WI",
                    pickup_address_zip: "53719",
                    destination_address_name: "Brad Hollister",
                    destination_address_street_1: "702 S Randall Ave",
                    destination_address_city: "Madison",
                    destination_address_state: "WI",
                    destination_address_zip: "53715",
                    ship_date: new Date(),
                    total_weight: 1000,
                    createdBy: userId,
                    created_date: new Date()
                });
                break;
            case 4:
                Shipments.insert({
                    pickup_address_name: "Jason Swanson",
                    ship_method: "truckload",
                    client_name: "ClearView Supply Chain",
                    pickup_address_street_1: "6417 Odana Rd.",
                    pickup_address_street_2: "Suite #6",
                    pickup_address_city: "Madison",
                    pickup_address_state: "WI",
                    pickup_address_zip: "53719",
                    destination_address_name: "Brad Hollister",
                    destination_address_street_1: "702 S Randall Ave",
                    destination_address_city: "Madison",
                    destination_address_state: "WI",
                    destination_address_zip: "53715",
                    ship_date: new Date(),
                    total_weight: 1000,
                    createdBy: userId,
                    created_date: new Date()
                });
                break;
            case 5:
                Shipments.insert({
                    pickup_address_name: "Jason Swanson",
                    ship_method: "truckload",
                    client_name: "ClearView Supply Chain",
                    pickup_address_street_1: "6417 Odana Rd.",
                    pickup_address_street_2: "Suite #6",
                    pickup_address_city: "Madison",
                    pickup_address_state: "WI",
                    pickup_address_zip: "53719",
                    destination_address_name: "Brad Hollister",
                    destination_address_street_1: "702 S Randall Ave",
                    destination_address_city: "Madison",
                    destination_address_state: "WI",
                    destination_address_zip: "53715",
                    ship_date: new Date(),
                    total_weight: 1000,
                    createdBy: userId,
                    created_date: new Date()
                });
                break;
            case 6:
                Shipments.insert({
                    pickup_address_name: "Jason Swanson",
                    ship_method: "truckload",
                    client_name: "ClearView Supply Chain",
                    pickup_address_street_1: "6417 Odana Rd.",
                    pickup_address_street_2: "Suite #6",
                    pickup_address_city: "Madison",
                    pickup_address_state: "WI",
                    pickup_address_zip: "53719",
                    destination_address_name: "Brad Hollister",
                    destination_address_street_1: "702 S Randall Ave",
                    destination_address_city: "Madison",
                    destination_address_state: "WI",
                    destination_address_zip: "53715",
                    ship_date: new Date(),
                    total_weight: 1000,
                    createdBy: userId,
                    created_date: new Date()
                });
                break;
            default:
                Shipments.insert({
                    pickup_address_name: "Jason Swanson",
                    ship_method: "truckload",
                    client_name: "ClearView Supply Chain",
                    pickup_address_street_1: "6417 Odana Rd.",
                    pickup_address_street_2: "Suite #6",
                    pickup_address_city: "Madison",
                    pickup_address_state: "WI",
                    pickup_address_zip: "53719",
                    destination_address_name: "Brad Hollister",
                    destination_address_street_1: "702 S Randall Ave",
                    destination_address_city: "Madison",
                    destination_address_state: "WI",
                    destination_address_zip: "53715",
                    ship_date: new Date(),
                    total_weight: 1000,
                    createdBy: userId,
                    created_date: new Date()
                });
        }
    }

});