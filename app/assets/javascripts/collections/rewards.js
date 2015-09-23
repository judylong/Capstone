Capstone.Collections.Rewards = Backbone.Collection.extend({
  url: function() {
    return this.project.url() + '/rewards'
  },

  model: Capstone.Models.Reward,

  // initialize: function(models, options) {
  //   this.project = options.project;
  // }

})
