Template.rankings.rendered=function()
{
    $('#rankings-link').addClass('selected');
    $('#jokes-link').removeClass('selected');
    $('#profiles-link').removeClass('selected');
    $('#search-link').removeClass('selected');
    $('#login-link').removeClass('selected');
}
Template.rankings.helpers({
    laughking:function(){
        var laughking=Meteor.users.findOne({},{sort:{'profile.laughscore':-1}});
        return laughking;
    },
    frownking:function(){
        var frownking=Meteor.users.findOne({},{sort:{'profile.frownscore':-1}});
        return  frownking;
    },
    pukeking:function(){
        var pukeking=Meteor.users.findOne({},{sort:{'profile.pukescore':-1}});
        return pukeking;
    }
})