Capstone.Views.RewardForm = Backbone.View.extend({
  template: JST['rewards/reward_form'],

  render: function() {
    var content = this.template({project: this.project});
    this.$el.html(content);
    return this;
  },

  tagName: "li",

  className: "reward-form group",

  initialize: function(options) {
    this.project = options.project;
    this.projectFormView = options.projectFormView;
  },

  events: {
    "click #checkbox":"quantityInput",
    "click button.remove-reward-form": "removeRewardForm"
  },

  quantityInput: function(e) {
    if ($('#checkbox').prop('checked')) {
      $('#checktext').removeClass('hideMe')
    } else {
      $('#checktext').addClass('hideMe')
    }
  },

  removeRewardForm: function(e) {
    e.preventDefault();
    this.projectFormView.removeSubview('.rewards-form-list', this);
  },


})
