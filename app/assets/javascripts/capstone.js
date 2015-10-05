window.Capstone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Capstone.Collections.projects = new Capstone.Collections.Projects();
    this.currentUser = new Capstone.Models.CurrentUser();
    this.currentUser.fetch();

    Capstone.categories = categories
    Capstone.shipping = shipping
    Capstone.logo = $('.logo-url').html()
    this.header = new Capstone.Views.Header({el: "#header"});
    this.footer = new Capstone.Views.Footer({el: "#footer"})
    this.router = new Capstone.Routers.Users({$rootEl: $("#main")})
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Capstone.initialize();
});
