

Template.login.rendered=function(){

}
Template.login.events({
    "submit .form-signin":function()
    {
      var email=triminput(event.target.email.value);
      var password=triminput(event.target.password.value);
      if(isnotempty(email)&&isnotempty(password))
      {
          Meteor.loginWithPassword(email,password,function(err)
          {
              if(err)
              {
                  Bert.alert(err.reason,"danger","growl-top-right");
                  return false;
              }
              else
              {
                  Router.go("/jokes");
                  Bert.alert("you are now logged in","success","growl-top-right");
              }

          })
      }
      return false;

    }
  
})
var triminput=function(val)
{
    return val.replace(/^\s*|\s*$/g,"");
}
var isnotempty=function(value)
{
    if(value && value !=='')
    {
        return true;
    }
        Bert.alert("please fill in all field"," danger","growl-top-right");
        return false;
}