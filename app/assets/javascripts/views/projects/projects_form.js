Capstone.Views.ProjectForm = Backbone.View.extend({
  template: JST['projects/project_form'],
  tagName: "form",
  render: function() {
    var content = this.template({project: this.model});
    this.$el.html(content);
    return this;
  },
  events: {
    "click button.submit-project": "submit"
  },
  submit: function(e) {
    e.preventDefault();
    debugger
    var data = this.$el.serializeJSON();
    this.model.save(data, {
      success: function(){
        this.collection.add(this.model)
        Backbone.history.navigate("#", { trigger: true })
      }.bind(this)
    })
  },
})
