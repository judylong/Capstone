Capstone.Views.LogIn = Backbone.View.extend({
  template: JST['shared/log_in'],

  initialize: function(options) {
    this.callback = options.callback;
    this.listenTo(Capstone.currentUser, "logIn", this.logInCallback);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  className: "signlog-div",

  events: {
    "submit form":"submit"
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
  }
})
