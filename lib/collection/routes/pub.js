if(Meteor.isServer)
{
    Meteor.publish('Jokes',function(){
           if(!this.userId)
           {
               return false;
               throw new Meteor.Error('Not Authorized'); 
           }
           else{
               return Jokes.find();
            }
    });
    Meteor.publish('Users',function(){
        if(!this.userId)
        {
            return false;
            throw new Meteor.Error('Not Authorized'); 
        }
        else{
            return Meteor.users.find();
         }
 });
 Meteor.publish("ProfileImages", function(){ return ProfileImages.find();});
 Meteor.publish("UserImages", function(){ return UserImages.find(); });
}