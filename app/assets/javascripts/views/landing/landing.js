Capstone.Views.Landing = Backbone.View.extend({
  template: JST['landing/landing'],

  className: "carousel",

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.$el.carousel();
    return this;
  },

})
