Capstone.Views.ProjectForm = Backbone.CompositeView.extend({
  template: JST['projects/project_form'],
  tagName: "form",
  className: "big-project-form",
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
    "change #input-project-image": "fileInputChange",
    "click button.fill-in": "fillIn"
  },

  addRewardForm: function(e) {
    if (e) {
      e.preventDefault();
    }
    var subview = new Capstone.Views.RewardForm({project: this.model, projectFormView: this});
    this.addSubview('.rewards-form-list', subview);
  },

  submit: function(e) {
    e.preventDefault();

    var file = this.$("#input-project-image")[0].files[0];

    var formEl = this.$el[0];
    var formData = new FormData(formEl);
    if (file) {
      formData.append("project[image]", file);
    }
    this.model.saveFormData(formData, {
      success: function(model, resp){
        this.collection.add(this.model);
        Backbone.history.navigate("#projects/" + resp.id, { trigger: true });
      }.bind(this),
      error: function(model, resp, data){
        alert(resp.responseJSON.join('\n'));
      }
    });
  },

  fileInputChange: function(e) {
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
  },

  fillIn: function(e) {
    e.preventDefault();
    var today = new Date();
    var future_day = new Date(today.setDate(today.getDate() + 365));
    this.model.title = "Secret Plot";
    this.model.description = "Help fund the latest and greatest scheme of the century.";
    this.model.goal = "1024";
    this.model.full_description = "This is where I should be detailing more of my plan, but I am too busy feeding my army of puppies.";
    this.model.end_date = future_day.toJSON().slice(0,10);
    this.model.reward_dummy_qt = "2";
    this.model.reward_dummy_desc = "A suprise like nothing the world has ever witnessed.";
    this.render();
    this.eachSubview(function(subView) {
      subView.render();
    });
  }
})
