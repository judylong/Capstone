Capstone.Views.LogIn = Backbone.View.extend({
  template: JST['shared/log_in'],

  initialize: function(options) {
    this.callback = options.callback;
    this.listenTo(Capstone.currentUser, "logIn", this.logInCallback);
    this.guestModel = options.guestModel;
    this.usersCollection = options.usersCollection;
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  className: "signlog-div",

  events: {
    "submit form":"submit",
    "click button.guest":"loginGuest"
  },
  submit: function(e) {
    e.preventDefault();

    var $form = $(e.currentTarget);
    var loginData = $form.serializeJSON().user;

    Capstone.currentUser.logIn({
      email: loginData.email,
      password: loginData.password,
      error: function() {
          alert("Wrong username/password combination. Please try again.");
      }
    });
  },

  logInCallback: function(e) {
    if(this.callback) {
      this.callback();
    } else {
      Backbone.history.navigate("", { trigger: true })
    }
  },

  loginGuest: function(e) {
    e.preventDefault();
    var guestEmail = "guest" + Math.floor((Math.random() * 1000000) + 1) + "@villainsRule.com"
    var guestUserData = {name: "Guest", email: guestEmail, email_confirmation: guestEmail, password: "password", password_confirmation: "password"}

    this.guestModel.save(guestUserData, {
      success: function() {
        Capstone.currentUser.fetch();
        this.usersCollection.add(this.guestModel, { merge: true });
        Backbone.history.navigate("", { trigger: true });
      }.bind(this),
      error: function(model, resp, data){
        alert(resp.responseJSON.join('\n'));
      }
    })

  }

})
