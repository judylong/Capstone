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
    this.project = options.project
  },

  events: {
    "click #checkbox":"quantityInput"
  },

  quantityInput: function(e) {
    if ($('#checkbox').prop('checked')) {
      $('#checktext').removeClass('hideMe')
    } else {
      $('#checktext').addClass('hideMe')
    }
  }

})
