Capstone.Views.SearchResultsIndex = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.bindScroll();
    this.searchResults = new Capstone.Collections.SearchResults();
    this.searchResults.pageNum = 1;
    this.listenTo(this.searchResults, "sync", this.render);

    this.listenTo(this.searchResults, 'add', this.addSearchResultsIndexItem);
    this.searchResults.each(this.addSearchResultsIndexItem.bind(this));
    this.listenTo(this.searchResults, 'remove', this.removeSearchResultsIndexItem);

    if (options.qstring) {
      this.qstring = options.qstring;
      this.url = "/api/search"
    } else {
      this.qstring = options.category;
      this.url = "/api/search_category"
    }
    this.search()
  },

  events: {
    "click .next-page": "nextPage",
    "click .prev-page": "prevPage"
  },

  className: "search-results",

  template: JST['search/index'],

  render: function() {
    // var content = this.template();
    var content = this.template({results: this.searchResults});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addSearchResultsIndexItem: function(searchResultsIndexItem) {
    var subview = new Capstone.Views.ProjectsIndexItem({model: searchResultsIndexItem})
    this.addSubview('.search-results-index', subview);
  },

  removeSearchResultsIndexItem: function(searchResultsIndexItem) {
    this.removeModelSubview('.search-results-index', searchResultsIndexItem);
  },

  search: function(e) {
    if (e) { e.preventDefault() };
    this.searchResults.pageNum = 1;
    this.searchResults.query = this.qstring;

    this.searchResults.search(this.url);
    // this.searchResults.fetch({
    //   data: {
    //     query: this.searchResults.query,
    //     page: 1
    //   }
    // });
  },

  bindScroll: function() {
    $(window).on("scroll", this.handleScroll.bind(this));
  },

  handleScroll: function(e) {
    var $doc = $(document);
    var scrolledDist = $doc.height() - window.innerHeight - $doc.scrollTop();

    if (scrolledDist < 300) {
      this.nextPageInfiniteScroll();
    }
  },

  nextPage: function(e) {
    this.searchResults.fetch({
      data: {
        query: this.searchResults.query,
        page: this.searchResults.pageNum + 1
      },
      success: function() {
        this.searchResults.pageNum = this.searchResults.pageNum + 1
      }.bind(this)
    })
  },

  // prevPage: function(e) {
  //   page: this.pageNum - 1
  // }
  nextPageInfiniteScroll: function() {
    if (this.requestingNextPage) return;

    this.requestingNextPage = true;
    this.searchResults.fetch({
      remove: false,
      data: {
        query: this.searchResults.query,
        page: this.searchResults.pageNum + 1
      },
      success: function() {
        this.requestingNextPage = false;
        this.searchResults.pageNum++;
      }.bind(this)
    });
  }

});
