window.Capstone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Capstone.Collections.projects = new Capstone.Collections.Projects();
    this.currentUser = new Capstone.Models.CurrentUser();
    this.currentUser.fetch();
    Capstone.CATEGORIES = ["Home Security", "Art", "Odd Services", "Enemy Capture/Destruction", "World Domination"];
    Capstone.SHIPPING = ["No shipping involved", "Only ships to certain countries", "Ships anywhere in the world"]
    this.header = new Capstone.Views.Header({el: "#header"});
    this.router = new Capstone.Routers.Users({$rootEl: $("#main")})
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Capstone.initialize();
});
