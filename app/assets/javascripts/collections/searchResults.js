Capstone.Collections.SearchResults = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.searchType = options.searchType
  },

  url: function() {
    if (this.searchType === "category") {
      return "/api/search_category"
    } else {
      return "/api/search"
    }
  },

  parse: function(resp) {
    return resp.results;
  },

  model: function(attrs) {
    if (attrs._type) { //polymorphic case
      var type = attrs._type;
      delete attrs._type;
    } else { //category search case
      var type = "Project";
    }
    return new Capstone.Models[type](attrs);
  }

 })
