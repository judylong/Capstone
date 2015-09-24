Capstone.Collections.SearchResults = Backbone.Collection.extend({
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
  },

  search: function(url) {
    // debugger
    $.ajax({
      method: "GET",
      url: url,
      data: {
        query: this.query,
        page: 1
      },
      success: function(resp){
        this.parse(resp);
        resp.results.forEach(function(result) {
          // debugger
          this.add(this.model(result))
        }.bind(this))
      }.bind(this)
    });
  }

 })
