Meteor.methods({
    'password_suggestion': function() {
        var chance, random_password;
        chance = new Chance();
        random_password = chance.string();
        return random_password;
    }
});