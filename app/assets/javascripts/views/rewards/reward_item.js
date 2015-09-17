Capstone.Views.RewardItem = Backbone.View.exend({
  template: JST['rewards/reward_item'],
  render: function() {
    var content = this.template({reward: this.model});
    this.$el.html(content);
    return this;
  }
})
