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
    "click button.become-backer":"becomeBacker"
  },

  becomeBacker: function(e) {
    e.preventDefault();
    // debugger
    // var callback = this.becomeBacker.bind(this);
    // if(!this._requireLoggedIn(callback)) { return; }

    var newRewarding = new Capstone.Models.Rewarding();
    newRewarding.save({reward_id: this.model.attributes.id}, {
      success: function() {
        // this.model.reward_backers().add(Capstone.currentUser);
        this.model.num_reward_backers += 1;
        // this.render();
      }.bind(this),
      error: function() {
        alert('already backed project')
      }
    })
  }
})
