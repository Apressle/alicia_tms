//Meteor.startup(() => {
  // code to run on server at startup
//});
Meteor.methods({
    random_new_shipment_generator: function(){
        die_roll = Math.floor(Math.random() * 7);
        switch (die_roll) {
            case 0:
                origin_address = {
                    pickup_address_name: "Jason Swanson",
                    client_name: "ClearView Supply Chain",
                    pickup_address_street_1: "6417 Odana Rd.",
                    pickup_address_street_2: "Suite #6",
                    pickup_address_city: "Madison",
                    pickup_address_state: "WI",
                    country: "US",
                    pickup_address_zip: "53719",
                    destination_address_name: "Brad Hollister",
                    destination_address_street_1: "702 S Randall Ave",
                    destination_address_city: "Madison",
                    destination_address_state: "WI",
                    destination_address_zip: "53715"
                };
                break;
            case 1:
                origin_address = {

                    company: "Henry Vilas Zoo",

                    country: "US",
                    phone: "(608) 258-9490",
                    email: "henryvilaszoo@clearviewaudit.com",

                };
                break;
            case 2:
                origin_address = {
                    name: "Buckingham Badger",
                    company: "Camp Randall Stadium",
                    street1: "1440 Monroe St",
                    city: "Madison",
                    state: "WI",
                    country: "US",
                    phone: "(608) 262-1866",
                    email: "camprandall@clearviewaudit.com",
                    zip: "53711"
                };
                break;
            case 3:
                origin_address = {
                    name: "Jason Swanson",
                    company: "Camp Randall Stadium",
                    street1: "2 E Main St",
                    city: "Madison",
                    state: "WI",
                    country: "US",
                    phone: "(608) 266-0382",
                    email: "wicapitol@clearviewaudit.com",
                    zip: "53703"
                };
                break;
            case 4:
                origin_address = {
                    name: "Brad Hollister",
                    company: "Olbrich Botanical Gardens",
                    street1: "3330 Atwood Ave",
                    city: "Madison",
                    state: "WI",
                    country: "US",
                    phone: "(608) 246-4550",
                    email: "olbrichgardens@clearviewaudit.com",
                    zip: "53704"
                };
                break;
            case 5:
                origin_address = {
                    name: "Jason Swanson",
                    company: "Alliant Energy Center",
                    street1: "1919 Alliant Energy Center Way",
                    city: "Madison",
                    state: "WI",
                    country: "US",
                    phone: "(608) 267-3976",
                    email: "alliantenergycenter@clearviewaudit.com",
                    zip: "53713"
                };
                break;
            case 6:
                origin_address = {
                    name: "Brad Hollister",
                    company: "University of Wisconsin–Madison Arboretum",
                    street1: "1207 Seminole Hwy",
                    city: "Madison",
                    state: "WI",
                    country: "US",
                    phone: "(608) 263-7888",
                    email: "uwarboretum@clearviewaudit.com",
                    zip: "53711"
                };
                break;
            default:
                origin_address = {
                    name: "Jason Swanson",
                    company: "ClearView Supply Chain",
                    street1: "6417 Odana Rd.",
                    steet2: "Suite #6",
                    city: "Madison",
                    state: "WI",
                    country: "US",
                    phone: "608 333 5512",
                    email: "jswanson@clearviewsupplychain.com",
                    zip: "53719"
                };
        }
    }
});