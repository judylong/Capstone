Capstone.Models.Project = Backbone.Model.extend({
  urlRoot: '/api/projects',
  rewards: function() {
    if (!this._rewards) {
      this._lists = new Capstone.Collections.Rewards([], {project: this});
    }
    return this._lists
  },
  parse: function(response) {
    if (response.rewards) {
      this.rewards().set(response.rewards, {parse: true});
      delete response.rewards;
    }
    return response;
  }
});
