Providers = new Mongo.Collection("providers");
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
