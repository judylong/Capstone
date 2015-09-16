Capstone.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
  },

  routes: {
    "":"index",
    "projects/new":"new",
    "projects/:id":"show"
  },

  index: function() {
    this.collection.fetch();
    var view = new Capstone.Views.ProjectsIndex({collection: this.collection});
    this._swapView(view);
  },

  new: function() {
    var model = new Capstone.Models.Project();
    var view = new Capstone.Views.ProjectForm({model: model});
    this._swapView(view);
  },

  show: function(id) {

  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  }
})
