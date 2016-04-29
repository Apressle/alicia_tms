Providers = new Mongo.Collection("providers");
Shipments.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Provider Name"
    }

}));
