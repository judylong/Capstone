Capstone.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  toJSON: function() {
    var json = { user: _.clone(this.attributes) };
    return json;
  }
});

Capstone.Models.CurrentUser = Capstone.Models.User.extend({
  url: "/api/session",

  initialize: function(options) {
    this.listenTo(this, "change", this.fireSessionEvent);
  },

  isLoggedIn: function() {
    return !this.isNew();
  },

  logIn: function(options) {
    var model = this;
    var credentials = {
      "user[email]": options.email,
      "user[password]": options.password
    };

    $.ajax({
      url: this.url,
      type: "POST",
      data: credentials,
      dataType: "json",
      success: function(data) {
        model.set(data);
        options.success && options.success();
      },
      error: function() {
        options.error && options.error();
      }
    });
  },

  logOut: function(options) {
    var model = this;

    $.ajax({
      url: this.url,
      type: "DELETE",
      dataType: "json",
      success: function(data) {
        model.clear();
        options.success && options.success();
      }
    });
  },

  fireSessionEvent: function() {
    if (this.isLoggedIn()){
      this.trigger("logIn");
      console.log("currentUser is signed in!", this);
    } else {
      this.trigger("logOut");
      console.log("currentUser is signed out!")
    }
  }
});
