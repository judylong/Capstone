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
  }
});
