Router.route('/', {name: 'home'}, function () {
    this.render('home');
});
Router.route('/provider_listing', function () {
    this.render('provider_page', {
        subscriptions: function() {
            this.subscribe('providers');
            this.subscribe('shipments');
        }
    });
});
