Capstone.Views.Header = Backbone.View.extend({
  initialize: function(options) {
    this.listenTo(Capstone.currentUser, "logIn logOut", this.render);
    this.render();
  },

  events: {
    "click #log-out-link": "logOut"
  },

  template: JST['shared/header'],

  render: function() {
    var content = this.template({currentUser: Capstone.currentUser});
    this.$el.html(content);
    return this;
  },

  logOut: function(e) {
    e.preventDefault();
    Capstone.currentUser.logOut({
      success: function() {
        Backbone.history.navigate("session/new", { trigger: true });
      }
    });
  }
});
