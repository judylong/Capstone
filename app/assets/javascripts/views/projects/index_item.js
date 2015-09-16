Capstone.Views.ProjectsIndexItem = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'sync', this.render)
  },
  template: JST['projects/index_item'],
  className: "projects-index-item",
  render: function() {
    var content = this.template({project: this.model});
    this.$el.append(content);
    return this;
  }
});
