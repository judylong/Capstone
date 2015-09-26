Capstone.Views.ProjectsIndexItem = Backbone.View.extend({
  initialize: function() {
    // this.listenTo(this.model, 'sync', this.render)
  },
  template: JST['projects/index_item'],
  className: "projects-index-item group",
  render: function() {
    var content = this.template({project: this.model});
    this.$el.html(content);
    return this;
  }
});
