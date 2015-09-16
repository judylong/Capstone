Capstone.Collections.Projects = Backbone.Collection.extend({
  model: Capstone.Models.Project,
  url: "/api/projects",
  getOrFetch: function(id) {
    var model = this.get(id);
    if (model) {
      model.fetch();
    } else {
      model = new Capstone.Models.Project({id: id});
      this.add(model)
      model.fetch({
        error: function() {
          this.remove(model);
        }.bind(this)
      });
    }
    return model;
  }
});
