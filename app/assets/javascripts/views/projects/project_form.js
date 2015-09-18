Capstone.Views.ProjectForm = Backbone.CompositeView.extend({
  template: JST['projects/project_form'],
  tagName: "form",
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.addRewardForm()
  },
  render: function() {
    var content = this.template({project: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  events: {
    "click button.submit-project": "submit",
    "click button.add-reward-form": "addRewardForm"
  },
  addRewardForm: function(e) {
    if (e) {
      e.preventDefault();  
    }
    var newReward = new Capstone.Models.Reward({project: this.model});
    var subview = new Capstone.Views.RewardForm({model: newReward});
    this.addSubview('.rewards-form-list', subview);
  },
  removeRewardForm: function(rewardForm) {
    this.removeModelSubview('.rewards-form-list', rewardForm);
  },
  submit: function(e) {
    e.preventDefault();
    var data = this.$el.serializeJSON();
    this.model.save(data, {
      success: function(){
        this.collection.add(this.model)
        Backbone.history.navigate("#", { trigger: true })
      }.bind(this)
    })
  }
})
