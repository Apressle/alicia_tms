Shipments = new Mongo.Collection("shipments");
Shipments.attachSchema(new SimpleSchema({
    createdBy:{
      type: String,
      optional: true
    },
    client_name: {
        type: String,
        label: 'Client Name',
    },
    pickup_address_name: {
        type: String,
        label: 'Pickup Address Name/ Company',
    },
    pickup_address_street_1: {
        type: String,
        label: 'Pickup Address Street 1',
        optional: true
    },
    pickup_address_street_2: {
        type: String,
        label: 'Pickup Address Street 2',
        optional: true
    },
    pickup_address_city: {
        type: String,
        label: 'Pickup City',
    },
    pickup_address_state: {
        type: String,
        label: "Pickup State",
        allowedValues: ['AK',"AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","FM","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MP","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV", 'WY'],
        autoform: {
            options: [
                {label: "AK", value: "AK"},
                {label: "AL", value: "AL"},
                {label: "AR", value: "AR"},
                {label: "AS", value: "AS"},
                {label: "AZ", value: "AZ"},
                {label: "CA", value: "CA"},
                {label: "CO", value: "CO"},
                {label: "CT", value: "CT"},
                {label: "DC", value: "DC"},
                {label: "DE", value: "DE"},
                {label: "FL", value: "FL"},
                {label: "FM", value: "FM"},
                {label: "GA", value: "GA"},
                {label: "GU", value: "GU"},
                {label: "HI", value: "HI"},
                {label: "IA", value: "IA"},
                {label: "ID", value: "ID"},
                {label: "IL", value: "IL"},
                {label: "IN", value: "IN"},
                {label: "KS", value: "KS"},
                {label: "KY", value: "KY"},
                {label: "LA", value: "LA"},
                {label: "MA", value: "MA"},
                {label: "MD", value: "MD"},
                {label: "ME", value: "ME"},
                {label: "MH", value: "MH"},
                {label: "MI", value: "MI"},
                {label: "MN", value: "MN"},
                {label: "MO", value: "MO"},
                {label: "MP", value: "MP"},
                {label: "MS", value: "MS"},
                {label: "MT", value: "MT"},
                {label: "NC", value: "NC"},
                {label: "ND", value: "ND"},
                {label: "NE", value: "NE"},
                {label: "NH", value: "NH"},
                {label: "NJ", value: "NJ"},
                {label: "NM", value: "NM"},
                {label: "NV", value: "NV"},
                {label: "NY", value: "NY"},
                {label: "OH", value: "OH"},
                {label: "OK", value: "OK"},
                {label: "OR", value: "OR"},
                {label: "PA", value: "PA"},
                {label: "PR", value: "PR"},
                {label: "RI", value: "RI"},
                {label: "SC", value: "SC"},
                {label: "SD", value: "SD"},
                {label: "TN", value: "TN"},
                {label: "TX", value: "TX"},
                {label: "UT", value: "UT"},
                {label: "VA", value: "VA"},
                {label: "VI", value: "VI"},
                {label: "VT", value: "VT"},
                {label: "WA", value: "WA"},
                {label: "WI", value: "WI"},
                {label: "WV", value: "WV"},
                {label: "WY", value: "WY"}
            ]
        }
    },
    pickup_address_zip: {
        type: String,
        label: 'Pickup Zip Code'
    },
    destination_address_name: {
        type: String,
        label: 'Destination Address Name/ Company'
    },
    destination_address_street_1: {
        type: String,
        label: 'Destination Address Street 1',
        optional: true
    },
    destination_address_street_2: {
        type: String,
        label: 'Destination Address Street 2',
        optional: true
    },
    destination_address_city: {
        type: String,
        label: 'Destination City'
    },
    destination_address_state: {
        type: String,
        label: "Destination State",
        allowedValues: ['AK',"AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","FM","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MP","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV", 'WY'],
        autoform: {
            options: [
                    {label: "AK", value:"AK"},
                    {label: "AL", value:"AL"},
                    {label: "AR", value:"AR"},
                    {label: "AS", value:"AS"},
                    {label: "AZ", value:"AZ"},
                    {label: "CA", value:"CA"},
                    {label: "CO", value:"CO"},
                    {label: "CT", value:"CT"},
                    {label: "DC", value:"DC"},
                    {label: "DE", value:"DE"},
                    {label: "FL", value:"FL"},
                    {label: "FM", value:"FM"},
                    {label: "GA", value:"GA"},
                    {label: "GU", value:"GU"},
                    {label: "HI", value:"HI"},
                    {label: "IA", value:"IA"},
                    {label: "ID", value:"ID"},
                    {label: "IL", value:"IL"},
                    {label: "IN", value:"IN"},
                    {label: "KS", value:"KS"},
                    {label: "KY", value:"KY"},
                    {label: "LA", value:"LA"},
                    {label: "MA", value:"MA"},
                    {label: "MD", value:"MD"},
                    {label: "ME", value:"ME"},
                    {label: "MH", value:"MH"},
                    {label: "MI", value:"MI"},
                    {label: "MN", value:"MN"},
                    {label: "MO", value:"MO"},
                    {label: "MP", value:"MP"},
                    {label: "MS", value:"MS"},
                    {label: "MT", value:"MT"},
                    {label: "NC", value:"NC"},
                    {label: "ND", value:"ND"},
                    {label: "NE", value:"NE"},
                    {label: "NH", value:"NH"},
                    {label: "NJ", value:"NJ"},
                    {label: "NM", value:"NM"},
                    {label: "NV", value:"NV"},
                    {label: "NY", value:"NY"},
                    {label: "OH", value:"OH"},
                    {label: "OK", value:"OK"},
                    {label: "OR", value:"OR"},
                    {label: "PA", value:"PA"},
                    {label: "PR", value:"PR"},
                    {label: "RI", value:"RI"},
                    {label: "SC", value:"SC"},
                    {label: "SD", value:"SD"},
                    {label: "TN", value:"TN"},
                    {label: "TX", value:"TX"},
                    {label: "UT", value:"UT"},
                    {label: "VA", value:"VA"},
                    {label: "VI", value:"VI"},
                    {label: "VT", value:"VT"},
                    {label: "WA", value:"WA"},
                    {label: "WI", value:"WI"},
                    {label: "WV", value:"WV"},
                    {label: "WY", value:"WY"}
            ]
        }
    },
    destination_address_zip: {
        type: String,
        label: 'Destination Zip Code',
    },
    ship_date: {
        type: Date,
        label: 'Date of Shipping',
        optional: true
    },
    total_weight:{
        type: Number,
        label: 'Total Weight of Shipment'
    },
    ship_method: {
        type: String,
        label: "Shipping Method"
    },
    provider_id: {
        type: String,
        optional: true
    }
}));