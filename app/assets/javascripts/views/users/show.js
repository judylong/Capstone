Capstone.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],
  className: "user-show",
  render: function() {
    var content = this.template({user: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.model.backed_projects().each(this.addBackedProjectItem.bind(this));
    this.listenTo(this.model.backed_projects(), "add", this.addBackedProjectItem);
    this.listenTo(this.model.backed_projects(), "remove", this.removeBackedProjectItem);

    this.model.created_projects().each(this.addCreatedProjectItem.bind(this));
    this.listenTo(this.model.created_projects(), "add", this.addCreatedProjectItem);
    this.listenTo(this.model.created_projects(), "remove", this.removeCreatedProjectItem);
  },

  addBackedProjectItem: function(projectItem) {
    var subview = new Capstone.Views.ProjectsIndexItem({model: projectItem}).bind(this);
    this.addSubview('.backed-projects-list', subview);
  },

  removeBackedProjectItem: function(projectItem) {
    this.removeModelSubview('.backed-projects-list', projectItem);
  },

  addCreatedProjectItem: function(projectItem) {
    var subview = new Capstone.Views.CreatedIndexItem({model: projectItem}).bind(this);
    this.addSubview('.created-projects-list', subview);
  },

  removeCreatedProjectItem: function(projectItem) {
    this.removeModelSubview('.created-projects-list', projectItem);
  }
})
