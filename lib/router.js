Router.route('/', {name: 'layout'}, function () {
    this.render('layout');
});
Router.route('/provider_listing/:_id', function () {
    //Meteor.call('get_latest_shipment', shipment),
    var shipment = Shipments.findOne({_id: this.params._id});
    //var shipment = Shipments.find({},{sort:{$natural:-1}}, {limit:1}).fetch();
    this.render('provider_page', {data:shipment});
        //subscriptions: function() {
        //    this.subscribe('providers');
        //    this.subscribe('shipments');
        //}
});

