Capstone.Views.RewardForm = Backbone.View.extend({
  template: JST['rewards/reward_form'],
  render: function() {
    var content = this.template({reward: this.model});
    this.$el.html(content);
    return this;
  }
})
