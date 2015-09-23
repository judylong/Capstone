Capstone.Views.SearchResultsIndex = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.bindScroll();
    this.searchResults = new Capstone.Collections.SearchResults();
    this.searchResults.pageNum = 1;
    this.listenTo(this.searchResults, "sync", this.render);

    this.listenTo(this.searchResults, 'add', this.addSearchResultsIndexItem)
    this.searchResults.each(this.addSearchResultsIndexItem.bind(this));
    this.listenTo(this.searchResults, 'remove', this.removeSearchResultsIndexItem);

    // debugger
    // this.listenTo($(".query"), "change", this.search)
    // this.search();
    this.qstring = options.qstring
    this.search()
  },

  events: {
    // "change .query": "search",
    // "submit .query-form": "search",
    "click .next-page": "nextPage",
    "click .prev-page": "prevPage"
  },

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
    // debugger
    if (e) { e.preventDefault() };
    this.searchResults.pageNum = 1;
    // debugger
    // this.searchResults.query = $(".query").val();
    this.searchResults.query = this.qstring;

    this.searchResults.fetch({
      data: {
        query: this.searchResults.query,
        page: 1
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
