Capstone.Collections.SearchResults = Backbone.Collection.extend({
  initialize: function(options) {
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
    if (resp.total_count) {
      this.total_count = resp.total_count;
    }
    return resp.results;
  },

  model: function(attrs) {
    if (attrs._type) {
      var type = attrs._type;
      delete attrs._type;
    } else {
      var type = "Project";
    }

    return new Capstone.Models[type](attrs);
  }

 })
