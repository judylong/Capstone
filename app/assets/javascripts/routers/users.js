Capstone.Routers.Users = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.collection = new Capstone.Collections.Users();
    this.collection.fetch();
  },

  routes: {
    "":"landing",
    "index":"index",
    "projects/new":"newProject",
    "projects/:id":"showProject",
    "users/new":"newUser",
    "users/:id":"showUser",
    "session/new":"logIn",
    "_=_":"landing",
    "search_results/:qstring":"showResults",
    "discover":"discoverShow",
    "categories/:category":"showCategoryResults"
  },

  landing: function() {
    var view = new Capstone.Views.Landing();
    this._swapView(view);
  },

  showCategoryResults: function(category) {
    var view = new Capstone.Views.SearchResultsIndex({category: category});
    this._swapView(view);
  },

  discoverShow: function() {
    var view = new Capstone.Views.Discover();
    this._swapView(view);
  },

  showResults: function(qstring) {
    var view = new Capstone.Views.SearchResultsIndex({qstring: qstring});
    this._swapView(view);
  },

  index: function() {
    Capstone.Collections.projects.fetch();
    var view = new Capstone.Views.ProjectsIndex({collection: Capstone.Collections.projects});
    this._swapView(view);
  },

  newProject: function() {
    var callback = this.newProject.bind(this);
    if(!this._requireLoggedIn(callback)) { return; }
    var model = new Capstone.Models.Project();

    model.title = "";
    model.description = "";
    model.goal = "";
    model.full_description = "";
    model.end_date = "";

    var view = new Capstone.Views.ProjectForm({model: model, collection: Capstone.Collections.projects});
    this._swapView(view);
  },

  showProject: function(id) {
    var model = Capstone.Collections.projects.getOrFetch(id);
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

  newUser: function() {
    if (!this._requireLoggedOut()) { return; }
    var model = new this.collection.model();
    var view = new Capstone.Views.UsersForm({
      collection: this.collection,
      model: model
    });
    this._swapView(view)
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  },

  logIn: function(callback) {
    if (!this._requireLoggedOut(callback)) { return; }

    var guestModel = new this.collection.model();
    var usersCollection = this.collection;

    var view = new Capstone.Views.LogIn({
      callback: callback,
      guestModel: guestModel,
      usersCollection: usersCollection
    });
    this._swapView(view);
  },

  _requireLoggedIn: function(callback) {
    if (!Capstone.currentUser.isLoggedIn()) {
      callback = callback || this._goHome.bind(this);
      this.logIn(callback);
      return false;
    }
    return true;
  },

  _requireLoggedOut: function(callback){
    if (Capstone.currentUser.isLoggedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    }
    return true;
  },

  _goHome: function() {
    Backbone.history.navigate("#", { trigger: true })
  }

})
