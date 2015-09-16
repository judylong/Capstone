Capstone.Views.ProjectShow = Backbone.View.extend({
  template: JST['projects/show'],
  className: "project-show",
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },
  render: function() {
    var content = this.template({project: this.model});
    this.$el.html(content);
    return this;
  }
})
