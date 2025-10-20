	$(document).ready(function(e) {

	    $('nav ul li ul').parent().find('> a').after("<span></span>")

	    $('.nav-icon, .overlay').click(function(e) {
	        $('body, .nav-icon').toggleClass('open')
	    })

	    $('nav').clone().appendTo('.side_bar')

	    $('nav ul > li > span').click(function(e) {
	        $(this).parent().find('ul').slideToggle()
	        $(this).parent().find('ul ul').hide()
	        $(this).parent().siblings().find('ul').slideUp()
	        $(this).toggleClass("active")
	        $(this).parent().siblings().find('span').removeClass("active")
	    })

	    $('.carousel').carousel({
	        interval: 8000
	    })

	    $("#owl-example").owlCarousel({
	        autoPlay: 8000,
	        navigation: true,
	        items: 4,
	        itemsDesktopSmall: 4,
	        slideSpeed: 2000,
	        paginationSpeed: 2000,
	        rewindSpeed: 2000
	    })

	    $('.expand-image').click(function(e) {
	        e.preventDefault()

	        if ($(this).attr("src") == "/images/expand_less-24px.svg") {
	            $(this).attr("src", "/images/expand_more-24px.svg")
	        } else {
	            $(this).attr("src", "/images/expand_less-24px.svg")
	        }

	        $(this).closest('li').find('ul:first').toggle()

	    })

	})