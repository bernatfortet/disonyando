class Disonyando

	images: [
		'http://payload159.cargocollective.com/1/0/2503/5497012/top_totems.jpg'
		'http://payload159.cargocollective.com/1/0/2503/5497012/top_error.jpg'
		'http://payload159.cargocollective.com/1/0/2503/5497012/top_fishes.jpg'
		'http://payload159.cargocollective.com/1/0/2503/5497012/top_geo.jpg'
		'http://payload159.cargocollective.com/1/0/2503/5497012/top_nav_flower.jpg'
		'http://payload159.cargocollective.com/1/0/2503/5497012/top_snobs.jpg'
	]

	constructor: ->
		console.log "Starting Test"
		this.listeners()
		this.addImages()

		$('.carousel').width( $(window).outerWidth() )
		$('.img').width( $(window).outerWidth() )

	addImages: ->
		for image in this.images
			this.addImage( image )

	addImage: ( image ) ->
		$('.carousel-container').append( "<div class='img'><img src='#{image}' /></div>" )

	listeners: ->
		$("body").on( "mouseover", "nav a", this.onClickNavItem )

	onClickNavItem: (event) =>
		navItemIndex = $( event.currentTarget ).index()

		this.showCarouselImage( navItemIndex )

	showCarouselImage: ( imgIndex ) ->
		image = $(".carousel .img").eq( imgIndex )
		imagePosition = image.position().left

		#$(".carousel-container").stop(false,false).animate({"left": -imagePosition}, 500, "easeInOutExpo")
		$(".carousel-container").css( "left", -imagePosition )

		console.log imagePosition







$(document).ready(->
	disonyando = new Disonyando
)



###

url = document.location.path

url.split('/')

section = url[3]

switch( section )
	case "typography"
		console.log( "typography" )




###