Providers = new Mongo.Collection("providers");
Providers.allow({
    insert: function() {return true},
    update: function() {return true},
    remove: function() {return true}
});

Providers.attachSchema(new SimpleSchema({
    id: {
        type: String,
        optional: true
    },
    provider_name: {
        type: String,
        label: "Provider Name",
        optional: true
    },
    provider_rate: {
        type: String,
        label: "Provider Rate",
        optional: true
    }

}));
