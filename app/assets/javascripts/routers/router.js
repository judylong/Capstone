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

  },

  new: function() {

  },

  show: function(id) {
    
  }
})
