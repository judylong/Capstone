Capstone.Views.ProjectsIndex = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render)
  },
  template: JST['projects/index'],
  render: function() {
    this.collection.each(function(project) {
      var content = this.template({project: project});
      this.$el.append(content);
    }.bind(this))

    return this;
  }
});
