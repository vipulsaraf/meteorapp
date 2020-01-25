
Template.jokes.rendered=function()
{
    $('#jokes-link').addClass('selected');
    $('#profiles-link').removeClass('selected');
    $('#rankings-link').removeClass('selected');
    $('#search-link').removeClass('selected');
    $('#login-link').removeClass('selected');
}
Template.jokes.helpers({
    jokes:function(){
        var jokes=Jokes.find({},{sort:{createdAt: -1}});
        return jokes;
    }
})
Template.jokes.events({
    "click #laugh":function()
    {
      var thisuser=Meteor.userId();
      var thisjokes=Jokes.findOne({_id:this._id})._id;
      var jokeauthor=Jokes.findOne({_id:this._id}).userId;
      var Name=Meteor.user().username;
      var thisJokesVotes=Jokes.findOne({_id:this._id}).voted;
     if(thisJokesVotes.indexOf(Name)>-1)
     {
         Bert.alert('you cannot vote twice',"danger","growl-top-right");
     }else{
         Meteor.call("countvote",thisjokes,Name);
         Meteor.call("usepointlaugh",jokeauthor);
         Meteor.call("laughvote",thisuser,thisjokes);
         Bert.alert("your vote was placed" ,"success","growl-top-right");
     }
     if(Name==thisJokesVotes)
     {
         Bert.alert("you cannot vote for your own joke","danger","growl-top-right");
     }
     
    },
    "click #frown":function()
    {
        Bert.alert("you clicked frown" ,"success","growl-top-right");
        var thisuser=Meteor.userId();
        var thisjokes=Jokes.findOne({_id:this._id})._id;
        var jokeauthor=Jokes.findOne({_id:this._id}).userId;
        var Name=Meteor.user().username;
        var thisJokesVotes=Jokes.findOne({_id:this._id}).voted;
       if(thisJokesVotes.indexOf(Name)>-1)
       {
           Bert.alert('you cannot vote twice',"danger","growl-top-right");
       }else{
           Meteor.call("countvote",thisjokes,Name);
           Meteor.call("usepointlaugh",jokeauthor);
           Meteor.call("frownvote",thisuser,thisjokes);
           Bert.alert("your vote was placed" ,"success","growl-top-right");
       }
       if(Name==thisJokesVotes)
       {
           Bert.alert("you cannot vote for your own joke","danger","growl-top-right");
       }

    },
    "click #puke":function()
    {
        var thisuser=Meteor.userId();
        var thisjokes=Jokes.findOne({_id:this._id})._id;
        var jokeauthor=Jokes.findOne({_id:this._id}).userId;
        var Name=Meteor.user().username;
        var thisJokesVotes=Jokes.findOne({_id:this._id}).voted;
       if(thisJokesVotes.indexOf(Name)>-1)
       {
           Bert.alert('you cannot vote twice',"danger","growl-top-right");
       }else{
           Meteor.call("countvote",thisjokes,Name);
           Meteor.call("usepointlaugh",jokeauthor);
           Meteor.call("pukevote",thisuser,thisjokes);
           Bert.alert("your vote was placed" ,"success","growl-top-right");
       }
       if(Name==thisJokesVotes)
       {
           Bert.alert("you cannot vote for your own joke","danger","growl-top-right");
       }
        Bert.alert("you clicked puke" ,"success","growl-top-right");

    },
})