Router.route('/jokes',function(){
    this.layout('main_layout');
    this.render('jokes');
});
Router.route('/',function(){
    this.layout('main_layout');
    this.render('login');
});
Router.route('/signup',function(){
    this.layout('main_layout');
    this.render('signup');
});
Router.route('/search',function(){
    this.layout('main_layout');
    this.render('search');
})
Router.route('/profile',function(){
    this.layout('main_layout')
    this.render('Profile')
})
Router.route('/rankings',function(){
    this.layout('main_layout')
    this.render('rankings')
})
