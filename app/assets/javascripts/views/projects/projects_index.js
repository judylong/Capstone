Capstone.Views.ProjectsIndex = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addProjectsIndexItem);
    this.collection.each(this.addProjectsIndexItem.bind(this));
    this.listenTo(this.collection, 'remove', this.removeProjectsIndexItem);
  },
  template: JST['projects/index'],
  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  addProjectsIndexItem: function(projectsIndexItem) {
    var subview = new Capstone.Views.ProjectsIndexItem({model: projectsIndexItem});
    this.addSubview('.projects-index', subview);
  },
  removeProjectsIndexItem: function(projectsIndexItem) {
    this.removeModelSubview('.projects-index', projectsIndexItem);
  }
});
