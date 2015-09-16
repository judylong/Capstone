window.Capstone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var projects = new Capstone.Collections.Projects();
    new Capstone.Routers.Router({
      $rootEl: $("#main"),
      collection: projects
    })
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Capstone.initialize();
});
