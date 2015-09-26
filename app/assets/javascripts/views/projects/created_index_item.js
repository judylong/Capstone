Capstone.Views.CreatedIndexItem = Backbone.CompositeView.extend({
  className: "created-index-item group",
  template: JST['projects/created_index_item'],
  render: function() {
    var content = this.template({project: this.model});
    this.$el.html(content);
    return this;
  }
});
