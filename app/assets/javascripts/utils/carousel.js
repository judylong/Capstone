Capstone.Carousel = function (el) {
  this.$el = $(el);
  this.$items = this.$el.find(".items").children();
  this.$dots = this.$el.find(".carousel-circles").children();
  this.activeIdx = 0;
  this.transitioning = false;

  this.$items.eq(0).addClass("active");
  this.$dots.eq(0).addClass("active");

  this.$el.on("click", "img.slide-left", this.slideLeft.bind(this));
  this.$el.on("click", "img.slide-right", this.slideRight.bind(this));
  this.$el.on("click", "li.carousel-circle", this.jumpSlide.bind(this));
};

Capstone.Carousel.prototype.jumpSlide = function(e) {
  e.preventDefault();

  if (this.transitioning || ($(e.currentTarget).data("id") === this.activeIdx)) {
    return;
  }
  this.transitioning = true;

  var $oldItem = this.$items.eq(this.activeIdx);
  var $oldDot = this.$dots.eq(this.activeIdx);
  $oldDot.removeClass("active");

  this.activeIdx = $(e.currentTarget).data("id");
  var $newItem = this.$items.eq(this.activeIdx);
  var $newDot = this.$dots.eq(this.activeIdx);

  $newItem.addClass("active");
  $newDot.addClass("active");
  $oldItem.one("transitionend", (function () {
    $oldItem.removeClass("active");
    this.transitioning = false;
  }).bind(this));

  setTimeout((function () {
    $oldItem.removeClass("active");
  }).bind(this), 0);
};

Capstone.Carousel.prototype.slide = function (dir) {
  if (this.transitioning) {
    return;
  }
  this.transitioning = true;

  var $oldItem = this.$items.eq(this.activeIdx);
  var $oldDot = this.$dots.eq(this.activeIdx);
  $oldDot.removeClass("active")
  this.activeIdx =
    (this.activeIdx + dir + this.$items.length) % this.$items.length;
  var $newItem = this.$items.eq(this.activeIdx);
  var $newDot = this.$dots.eq(this.activeIdx);

  $newItem.addClass("active");
  $newDot.addClass("active");

  $oldItem.one("transitionend", (function () {
    $oldItem.removeClass("active");
    this.transitioning = false;
  }).bind(this));

  setTimeout((function () {
    $oldItem.removeClass();
  }).bind(this), 0);
};

Capstone.Carousel.prototype.slideLeft = function (e) {
  e.preventDefault();
  this.slide(1);
};

Capstone.Carousel.prototype.slideRight = function (e) {
  e.preventDefault();
  this.slide(-1);
};

$.fn.carousel = function () {
  return this.each(function () {
    new Capstone.Carousel(this);
  });
};
