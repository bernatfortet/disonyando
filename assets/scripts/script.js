(function() {
  var Disonyando,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Disonyando = (function() {

    Disonyando.prototype.images = ['http://payload159.cargocollective.com/1/0/2503/5497012/top_totems.jpg', 'http://payload159.cargocollective.com/1/0/2503/5497012/top_error.jpg', 'http://payload159.cargocollective.com/1/0/2503/5497012/top_fishes.jpg', 'http://payload159.cargocollective.com/1/0/2503/5497012/top_geo.jpg', 'http://payload159.cargocollective.com/1/0/2503/5497012/top_nav_flower.jpg', 'http://payload159.cargocollective.com/1/0/2503/5497012/top_snobs.jpg'];

    function Disonyando() {
      this.onClickNavItem = __bind(this.onClickNavItem, this);
      console.log("Starting Test");
      this.listeners();
      this.addImages();
      $('.carousel').width($(window).outerWidth());
      $('.img').width($(window).outerWidth());
    }

    Disonyando.prototype.addImages = function() {
      var image, _i, _len, _ref, _results;
      _ref = this.images;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        image = _ref[_i];
        _results.push(this.addImage(image));
      }
      return _results;
    };

    Disonyando.prototype.addImage = function(image) {
      return $('.carousel-container').append("<div class='img'><img src='" + image + "' /></div>");
    };

    Disonyando.prototype.listeners = function() {
      return $("body").on("mouseover", "nav a", this.onClickNavItem);
    };

    Disonyando.prototype.onClickNavItem = function(event) {
      var navItemIndex;
      navItemIndex = $(event.currentTarget).index();
      return this.showCarouselImage(navItemIndex);
    };

    Disonyando.prototype.showCarouselImage = function(imgIndex) {
      var image, imagePosition;
      image = $(".carousel .img").eq(imgIndex);
      imagePosition = image.position().left;
      $(".carousel-container").css("left", -imagePosition);
      return console.log(imagePosition);
    };

    return Disonyando;

  })();

  $(document).ready(function() {
    var disonyando;
    return disonyando = new Disonyando;
  });

  /*
  
  url = document.location.path
  
  url.split('/')
  
  section = url[3]
  
  switch( section )
  	case "typography"
  		console.log( "typography" )
  */


}).call(this);
