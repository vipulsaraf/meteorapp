Template.Profile.rendered=function()
{
    $('#profile-link').addClass('selected');
    $('#jokes-link').removeClass('selected');
    $('#rankings-link').removeClass('selected');
    $('#search-link').removeClass('selected');
    $('#login-link').removeClass('selected');
}
Template.Profile.helpers({
    email:function(){
      if(!Meteor.user())
        {
            Bert.alert("you are not logged in,permission denied",'danger','growl-top-right');
            return false;
        }
        else{
            return Meteor.user().emails[0].address;
        }
    },
    username:function(){
   if(!Meteor.user())
   {
       console.log(username)
    Bert.alert("you are not logged in,permission denied",'danger','growl-top-right');
    return false;    
   }
   else{
       return Meteor.user().username;
   }
},
  userjokes:function()
{
    if(!Meteor.user())
    {
     Bert.alert("you are not logged in,permission denied",'danger','growl-top-right');
     return false; 
    }
    else{  
    var username=Meteor.user().username;
    var userId=Meteor.userId();
    console.log(userId);
    console.log(this._id);
    var userjokes=Jokes.find({userId:this._id},{sort:{createdAt:-1}});
    return userjokes;
    }
},
userlaughscore:function()
{
   return Meteor.user().profile.laughscore;
},
userfrownscore:function()
{
    return Meteor.user().profile.frownscore;
},
userpukescore:function()
{
    return Meteor.user().profile.pukescore;
},
UserImages:function()
{
    var username=Meteor.user().username;
    var userId=Meteor.userId();
    var URL=UserImages.find({username:username},{userId:userId});
    return URL;
    
}
});
Template.Profile.events({
    "click #delete-joke":function()
    {
        Meteor.call('removejokes',this._id);
        Bert.alert("your jokes was deleted","success","growl-top-right");
    },
    "submit .edit-profile":function(event){
        var file=$('#profileImage').get(0).files[0];
        if(file){
            fsFile=new Fs.File(file);
            ProfileImages.insert(fsFile,function(err,result)
            {
                if (err)
                {
                    throw new Meteor.Error(err);
                }else{
                      var imageLoc ='/cfs/files/ProfileImages/'+result._id;
                      UserImages.insert({
                          userId:Meteor.userId(),
                          username:Meteor.user().username,
                          image:imageLoc
                      });
                      Bert.alert("profile update successful" ,"success","growl-top-right");
                }
            })
        }
        return false;
    }
})
