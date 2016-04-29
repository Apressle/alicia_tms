Template.provider_list.onRendered = function(){
    Meteor.subscribe("providers")
};
Template.provider_list.helpers({
    provider: function() {
        return Providers.find();
    }
});