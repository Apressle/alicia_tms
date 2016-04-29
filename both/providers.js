Providers = new Mongo.Collection("providers");
Providers.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Provider Name"
    }

}));
