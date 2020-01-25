Tracker.autorun(()=>
{
    if(Meteor.user_Id)
    {
        Router.go('/jokes');
    }
})
Template.sidebar.rendered=function()
{

}
Template.sidebar.events({
    "click .logout":function(event){
        Meteor.logout(function(err){
        if(err)
        {
         Bert.alert(err.reason,"danger","growl-top-right");
            }
            else{
                Router.go('/');
                Bert.alert("you are now logged out","success","growl-top-right");
                
                

               }
            
        })
    }
})