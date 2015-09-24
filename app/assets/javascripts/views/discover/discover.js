Capstone.Views.Discover = Backbone.CompositeView.extend({
  template: JST['discover/show'],
  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  className: "discover"
})
