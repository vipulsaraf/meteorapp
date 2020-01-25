if(Meteor.isServer)
{
    Meteor.methods({
      
        addjokes:function(jokename,jokepost)
        {
            if(!Meteor.userId())
            {
                throw new Meteor.Error('not authorized');
                return false;
            }
            else{
                var username=Meteor.user().username;
                var year=new Date().getFullYear();
                var month=new Date().getMonth()+1;
                var day=new Date().getDate();
                var date=(month+"/"+day+"/"+year).toString();
                
                Jokes.insert({
                    jokename:jokename,
                    jokepost:jokepost,
                    author:username,
                    date:date,
                    createdat:new Date(),
                    laughscore:0,
                    frownscore:0,
                    pukescore:0,
                    voted:[username],
                    userid:Meteor.userId(),
                })
            }
        },
        removejokes:function(jokesId){
            if(!Meteor.userId())
            {
                throw new Meteor.Error('not authorized');
                this.stop();
                return false;
            }
            else{
                Jokes.remove(jokesId);
                return true;
            }
        },
        laughvote:function(thisuser,thisjoke){
            if(!thisuser)
            {
                throw new Meteor.Error('not authorized');
                return false;
            }
            else{
                Jokes.update(thisjoke,{$inc:{laughscore:+1}})
            }
        },
        countvote:function(thisjokes,Name){
            if(!Meteor.userId())
            {
                throw new Meteor.Error('not authorized');
                this.stop();
                return false;
            }else{
                Jokes.update(thisjokes,{$addToSet:{voted:Name}});

            }

        },
        usepointlaugh:function(jokeauthor){
            if(!Meteor.userId())
            {
                throw new Meteor.Error('not authorized');
                this.stop();
                return false;
            }else{
                Meteor.users.update(jokeauthor,{$inc:{'profile.laughscore':+1}});
            }
        },
        userpointfrown:function(jokeauthor){
            if(!Meteor.userId())
            {
                throw new Meteor.Error('not authorized');
                this.stop();
                return false;
            }else{
                Meteor.users.update(jokeauthor,{$inc:{'profile.frownscore':+1}});
            }
        },
        userpointpuke:function(jokeauthor){
            if(!Meteor.userId())
            {
                throw new Meteor.Error('not authorized');
                this.stop();
                return false;
            }else{
                Meteor.users.update(jokeauthor,{$inc:{'profile.pukescore':+1}});
            }   
        },
    });
}