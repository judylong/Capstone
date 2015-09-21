Capstone.Views.ProjectShow = Backbone.CompositeView.extend({
  template: JST['projects/show'],
  className: "project-show",
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.rewards(), "add", this.addRewardItem);
    this.model.rewards().each(this.addRewardItem.bind(this));
    this.listenTo(this.model.rewards(), "remove", this.removeRewardItem);
  },
  render: function() {
    var content = this.template({project: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  addRewardItem: function(rewardItem) {
    var subview = new Capstone.Views.RewardItem({model: rewardItem});
    this.addSubview('.rewards-list', subview);
  },
  removeRewardItem: function(rewardItem) {
    this.removeModelSubview('.rewards-index', rewardItem);
  }
})
