Capstone.Views.UsersForm = Backbone.View.extend({
  initialize: function(options) {
    this.listenTo(this.model, "sync change", this.render);
  },

  template: JST['users/form'],

  render: function() {
    var content = this.template({user: this.model});
    this.$el.html(content);
    return this;
  },

  events: {
    "submit form":"submit"
  },

  submit: function(e) {
    e.preventDefault();

    var $form = $(e.currentTarget);
    var userData = $form.serializeJSON().user;

    this.model.save(userData, {
      success: function() {
        Capstone.currentUser.fetch();
        this.collection.add(this.model, { merge: true });
        Backbone.history.navigate("", { trigger: true });
      }.bind(this),
      error: function(data){
        alert("Form invalid. Let the user know what went wrong.");
        console.log(data);
      }
    })
  }
})
