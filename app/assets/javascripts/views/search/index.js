Capstone.Views.SearchResultsIndex = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.bindScroll();

    if (options.category) {
      this.searchResults = new Capstone.Collections.SearchResults({searchType: "category"});
      this.qstring = options.category;
    } else {
      this.searchResults = new Capstone.Collections.SearchResults({searchType: "query"});
      this.qstring = options.qstring;
    }

    this.listenTo(this.searchResults, "sync", this.render);

    this.listenTo(this.searchResults, 'add', this.addSearchResultsIndexItem);
    this.searchResults.each(this.addSearchResultsIndexItem.bind(this));
    this.listenTo(this.searchResults, 'remove', this.removeSearchResultsIndexItem);

    this.search()
  },

  className: "search-results",

  template: JST['search/index'],

  render: function() {
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
    this.searchResults.query = this.qstring;

    this.searchResults.fetch({
      data: {
        query: this.searchResults.query
      }
    });
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
