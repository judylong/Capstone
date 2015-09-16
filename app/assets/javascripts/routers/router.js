Capstone.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
  },

  routes: {
    "":"index",
    "projects/new":"new",
    "projects/:id":"showProject",
    "users/:id":"showUser"
  },

  index: function() {
    this.collection.fetch();
    var view = new Capstone.Views.ProjectsIndex({collection: this.collection});
    this._swapView(view);
  },

  new: function() {
    var model = new Capstone.Models.Project();
    var view = new Capstone.Views.ProjectForm({model: model, collection: this.collection});
    this._swapView(view);
  },

  showProject: function(id) {
    var model = this.collection.getOrFetch(id);
    var view = new Capstone.Views.ProjectShow({model: model});
    this._swapView(view);
  },

  showUser: function(id) {
    var model = new Capstone.Models.User({id: id})
    model.fetch({
      success: function() {
        var view = new Capstone.Views.UserShow({model: model});
        this._swapView(view);
      }.bind(this)
    })
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  }
})
