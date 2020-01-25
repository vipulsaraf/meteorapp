Template.rankings.onrendered=function()
{
    $('#search-link').addClass('selected');
    $('#jokes-link').removeClass('selected');
    $('#profiles-link').removeClass('selected');
    $('#rankings-link').removeClass('selected');
    $('#login-link').removeClass('selected');
}
Template.search.helpers({
    inputAttributes:function(){
        return {'class':'easy-search-input','placeholder':'Start Searching'};
    },
    players:function(){
        return Jokes.find({},{sort:{createdAt:-1}});
    },
  selectedName:function(){
      var joke=JokesIndex.config.mongoCollection.findOne({__originalId:session.get("selectedJoke")});
      return joke && joke.jokeName;
  },
  index:function(){
      return JokesIndex;
  },
  resultCount:function(){
      return JokesIndex.getComponentDict().get('count');
  },
  renderTmpl:()=>Template.renderTemplat
});
Template.User.helpers({
    selected:function(){
        return Session.equals("selectedJoke",this.__originalId)?"selected":'';
    }
})