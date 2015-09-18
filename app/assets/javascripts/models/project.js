Capstone.Models.Project = Backbone.Model.extend({
  urlRoot: '/api/projects',

  rewards: function() {
    if (!this._rewards) {
      this._rewards = new Capstone.Collections.Rewards([], {project: this});
    }
    return this._rewards
  },

  parse: function(response) {
    if (response.rewards) {
      this.rewards().set(response.rewards);
      delete response.rewards;
    }
    return response;
  },

  toJSON: function() {
    var json = {project: _.clone(this.attributes)};
    return json;
  },

  saveFormData: function(formData, options){
    var method = this.isNew() ? "POST":"PUT";
    var model = this;

    $.ajax({
      url: _.result(model, "url"),
      type: method,
      data: formData,
      processData: false,
      contentType: false,
      success: function(resp){
        model.set(model.parse(resp));
        model.trigger('sync', model, resp, options);
        options.success && options.success(model, resp, options);
      },
      error: function(resp){
        options.error && options.error(model, resp, options);
      }
    });
  }
});
