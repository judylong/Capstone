Capstone.Views.ProjectShow = Backbone.View.extend({
  template: JST['projects/show'],
  className: "project-show"
  render: function() {
    var content = this.template({project: this.model});
    this.$el.html(content);
    return this;
  }
})
