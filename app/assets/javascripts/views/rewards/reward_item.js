Capstone.Views.RewardItem = Backbone.View.extend({
  template: JST['rewards/reward_item'],
  render: function() {
    var content = this.template({reward: this.model});
    this.$el.html(content);
    return this;
  },
  tagName: "li",
  className: "become-backer",
  events: {
    "click":"becomeBacker"
  },

  becomeBacker: function(e) {
    e.preventDefault();

    if(!Capstone.currentUser.isLoggedIn()) {
      Backbone.history.navigate("session/new", {trigger: true});
      return;
    }

    var newRewarding = new Capstone.Models.Rewarding();
    newRewarding.save({reward_id: this.model.attributes.id}, {
      success: function() {
        Capstone.currentUser.backed_projects().add(new Capstone.Models.Project({id: this.model.attributes.project_id}))
        this.model.set({num_reward_backers: this.model.attributes.num_reward_backers + 1});
        this.project.set({num_project_backers: this.project.attributes.num_project_backers + 1});
        this.project.set({amt_funded: this.project.get('amt_funded') + this.model.get('pledge_amount')});
        this.render();
      }.bind(this),
      error: function() {
        alert('cannot back project')
      }
    })
  },

  initialize: function(options) {
    this.project = options.project
  }
})
