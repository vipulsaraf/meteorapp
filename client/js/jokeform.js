Template.jokeform.rendered=function(){

}
Template.jokeform.events({
    "submit .joke-post":function(event)
    {
        var jokename=event.target.jokename.value;
        var jokepost=event.target.jokepost.value;
        if(isnotempty(jokename) && isnotempty(jokepost))
        {
         Meteor.call('addjokes',jokename,jokepost);
         event.target.jokename.value = "";
         event.target.jokepost.value = "";
         Bert.alert("your joke was posted","success","growl-top-right");
        }
        else{
            Bert.alert("something went wrong","danger","growl-top-right");
        
        }
        return false;
        }
    });
  

var isnotempty=function(value)
{
    if(value && value !=='')
    {
        return true;
    }
        Bert.alert("please fill in all field"," danger","growl-top-right");
        return false;
}