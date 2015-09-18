Capstone.Collections.Users = Backbone.Collection.extend({
  model: Capstone.Models.User,
  url: "/api/users",
  getOrFetch: function(id) {
    var model = this.get(id);
    if (model) {
      model.fetch();
    } else {
      model = new Capstone.Models.User({id: id});
      this.add(model);
      model.fetch({
        error: function() {
          this.remove(model);
        }.bind(this)
      })
    }
    return model;
  }
})
