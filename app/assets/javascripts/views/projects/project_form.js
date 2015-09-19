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
    var newReward = new Capstone.Models.Reward({project: this.model});
    var subview = new Capstone.Views.RewardForm({model: newReward});
    this.addSubview('.rewards-form-list', subview);
  },

  removeRewardForm: function(rewardForm) {
    this.removeModelSubview('.rewards-form-list', rewardForm);
  },

  submit: function(e) {
    e.preventDefault();
    debugger
    var title = this.$("#input-project").val();
    var file = this.$("#input-project-image")[0].files[0];

    var formData = new FormData();
    formData.append("project[title]", title);
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
