Capstone.Views.ProjectForm = Backbone.CompositeView.extend({
  template: JST['projects/project_form'],
  tagName: "form",
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.addRewardForm();
  },

  render: function() {
    var content = this.template({project: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  events: {
    "click button.submit-project": "submit",
    "click button.add-reward-form": "addRewardForm",
    "change #input-project-image": "fileInputChange"
  },

  addRewardForm: function(e) {
    if (e) {
      e.preventDefault();
    }
    var subview = new Capstone.Views.RewardForm({project: this.model});
    this.addSubview('.rewards-form-list', subview);
  },

  removeRewardForm: function(rewardForm) {
    this.removeModelSubview('.rewards-form-list', rewardForm);
  },

  submit: function(e) {
    e.preventDefault();

    var file = this.$("#input-project-image")[0].files[0];

    var formEl = this.$el[0];
    var formData = new FormData(formEl);
    debugger
    formData.append("project[image]", file);

    this.model.saveFormData(formData, {
      success: function(){
        this.collection.add(this.model)
        Backbone.history.navigate("", { trigger: true })
      }.bind(this)
    });
  },

  fileInputChange: function(e) {
    console.log(e.currentTarget.files[0]);

    var that = this;
    var file = e.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function(){
      that._updatePreview(reader.result);
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      that._updatePreview("");
    }
  },

  _updatePreview: function(src){
    this.$el.find("#preview-project-image").attr("src", src);
  }
})
