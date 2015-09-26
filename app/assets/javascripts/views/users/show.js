Capstone.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],
  render: function() {
    var content = this.template({user: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.model.backed_projects().each(this.addProjectItem.bind(this));
    this.listenTo(this.model.backed_projects(), "add", this.addProjectItem);
    this.listenTo(this.model.backed_projects(), "remove", this.removeProjectItem);
  },

  addProjectItem: function(projectItem) {
    var subview = new Capstone.Views.ProjectsIndexItem({model: projectItem}).bind(this);
    this.addSubview('.backed-projects-list', subview);
  },

  removeProjectItem: function(projectItem) {
    this.removeModelSubview('.backed-projects-list', projectItem);
  }

})
