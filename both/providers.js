Providers = new Mongo.Collection("providers");
Providers.attachSchema(new SimpleSchema({
    provider_name: {
        type: String,
        label: "Provider Name"
    },
    provider_rate: {
        type: String,
        label: "Provider Rate"
    }

}));
