Capstone.Views.CreatedIndexItem = Backbone.CompositeView.extend({
  className: "created-index-item group",
  template: JST['projects/created_index_item'],
  events: {
    "click button.destroyMyPlan": "destroyPlan"
  },

  destroyPlan: function(e) {
    e.preventDefault();
    this.model.destroy({
      wait: true,
      success: function() {
        console.log("destroyed");
      },
      error: function() {
        alert("Cannot destroy project that has backers!")
      }
    })
  },

  render: function() {
    var content = this.template({project: this.model});
    this.$el.html(content);
    return this;
  }
});
