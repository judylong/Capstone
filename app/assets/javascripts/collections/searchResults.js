Capstone.Collections.SearchResults = Backbone.Collection.extend({
  url: "/api/search",

  parse: function(resp) {
    // debugger
    if (resp.total_count) {
      this.total_count = resp.total_count;
    }
    return resp.results;
  },

  model: function(attrs) {
    var type = attrs._type;
    delete attrs._type;

    return new Capstone.Models[type](attrs);
  }
})
