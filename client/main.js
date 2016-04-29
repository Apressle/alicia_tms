Template.provider_list.onRendered = function(){
    Meteor.subscribe("providers")
};
Template.provider_list.helpers({
    provider: function() {
        return Providers.find();
    },
    'selected': function(){
        var provider_id= this._id;
        //console.log(provider_id);
        var selected_provider = Session.get('selected_provider');
        if(provider_id == selected_provider){
            return "selected"
        }
    }
});
Template.provider_list.events({
    'click .provider_listed': function(){
        var provider_id = this._id;
        Session.set('selected_provider', provider_id);
        Session.get('selected_provider');
        var selected_provider = Session.get('selected_provider');
        console.log(selected_provider);
    }
});