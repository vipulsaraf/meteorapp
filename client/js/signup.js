Template.signup.rendered=function(){

    
}
Template.signup.events({
    "submit .form-signup":function(event){
        var username=triminput(event.target.username.value);
        var email=triminput(event.target.email.value);
        var password=triminput(event.target.password.value);
        var password2=triminput(event.target.password2.value);
        if(isnotempty(username) 
        && isnotempty(email) && 
        isnotempty(password) && 
        isnotempty(password2)&&passwordmatch(password,password2))
        {
            Accounts.createUser({
                username:username,
                email:email,
                password:password,
                profile:{
                    laughscore:0,
                    frownscore:0,
                    pukescore:0,
                    voted:[],
                }
            },function(err)
            {
                if(err)
                {
                    Bert.alert(err.reason,"danger","growl-top-right");
                }
                else{
                Bert.alert("Account created! You are now logged In","success","growl-top-right");
                        Router.go('/jokes');
                }
            });
        }
        return false; 
    }
});
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
var passwordlength=function(value)
{
    
    if(value.length<6)
    {
        Bert.alert("password should have atleast 6 characters"," danger","growl-top-right");
        return false;
    }
    return true;
}
var passwordmatch=(password,password2)=>
{
    if(!passwordlength(password))
    {
        Bert.alert("password should have atleast 6 characters","danger","growl-top-right");
        return false;
    }
    if(password !==password2)
    {
        Bert.alert("confirm password does not match","danger","growl-top-right");   
        return false;
    }
    return true;
};
