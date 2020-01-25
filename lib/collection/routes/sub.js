if(Meteor.isClient){
    Meteor.subscribe('Jokes')
    Meteor.subscribe('users')
    Meteor.subscribe("ProfileImages");
    Meteor.subscribe("UserImages");
}