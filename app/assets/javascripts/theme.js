/////////////////////////////////////////////////////////////////////
// jQuery for page scrolling feature - requires jQuery Easing plugin
/////////////////////////////////////////////////////////////////////
$(function() {
$('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top -64
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});
});


////////////////////////////////////////////////////////////////////////
// On-Scroll Animated Header: https://github.com/codrops/AnimatedHeader
////////////////////////////////////////////////////////////////////////
$(function() {
var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.querySelector( '.navbar-fixed-top' ),
        didScroll = false,
        changeHeaderOn = 10;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 1200 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'navbar-shrink' );
        }
        else {
            classie.remove( header, 'navbar-shrink' );
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();
});


//////////////////////////////////////////////
// Highlight the top nav as scrolling occurs
//////////////////////////////////////////////
$(function() {
$('body').scrollspy({
    target: '.navbar',
    offset: 65
});
});


///////////////////////////////////////////
// Display loading image while page loads
///////////////////////////////////////////

// Wait for window load
$(function() {
$(window).load(function() {
    // Animate loader off screen
    $(".page-loader").fadeOut("fast");
});
});


////////////////////////////////////////////////////
// OWL Carousel: http://owlgraphic.com/owlcarousel
////////////////////////////////////////////////////
$(function() {
// Intro text carousel
$("#owl-intro-text").owlCarousel({
    singleItem : true,
    autoPlay : 6000,
    stopOnHover : true,
    navigation : false,
    navigationText : false,
    pagination : true
})


// Partner carousel
$("#owl-partners").owlCarousel({
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,2],
    itemsMobile : [479,1],
    autoPlay : 2000,
    stopOnHover : false,
    pagination : false
})

// Testimonials carousel
$("#owl-testimonial").owlCarousel({
    singleItem : true,
    pagination : true,
    autoHeight : true
})

});
////////////////////////////////////////////////////////////////////
// Stellar (parallax): https://github.com/markdalgleish/stellar.js
////////////////////////////////////////////////////////////////////
$(function() {
$.stellar({
    // Set scrolling to be in either one or both directions
    horizontalScrolling: false,
    verticalScrolling: true,
});

});

///////////////////////////////////////////////////////////
// WOW animation scroll: https://github.com/matthieua/WOW
///////////////////////////////////////////////////////////
$(function() {
new WOW().init();

});

////////////////////////////////////////////////////////////////////////////////////////////
// Counter-Up (requires jQuery waypoints.js plugin): https://github.com/bfintal/Counter-Up
////////////////////////////////////////////////////////////////////////////////////////////
$(function() {
$('.counter').counterUp({
    delay: 10,
    time: 2000
});

});

////////////////////////////////////////////////////////////////////////////////////////////
// Isotop Package
////////////////////////////////////////////////////////////////////////////////////////////
$(function() {
$(window).load(function() {
$('.portfolio_menu ul li').click(function(){
	$('.portfolio_menu ul li').removeClass('active_prot_menu');
	$(this).addClass('active_prot_menu');
});

var $container = $('#portfolio');
$container.isotope({
  itemSelector: '.col-sm-4',
  layoutMode: 'fitRows'
});
$('#filters').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
  return false;
});
});

});
// slide image time interval///
$(function() {
$('#Carousel').carousel({
  interval: 7000
});
});
/////////////////////////
// Scroll to top button
/////////////////////////

// Check to see if the window is top if not then display button
$(function() {
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrolltotop').fadeIn();
    } else {
        $('.scrolltotop').fadeOut();
    }
});

// Click event to scroll to top
$('.scrolltotop').click(function(){
    $('html, body').animate({scrollTop : 0}, 1500, 'easeInOutExpo');
    return false;
});

});

////////////////////////////////////////////////////////////////////
// Close mobile menu when click menu link (Bootstrap default menu)
////////////////////////////////////////////////////////////////////
$(function() {
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
});
/////////////////////
/////////////////////email validation/////////

$(function() {
$('#contact-form').bootstrapValidator({
//        live: 'disabled',
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'The Name is required and cannot be empty'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The email address is not valid'
                    }
                }
            },
            content: {
                validators: {
                    notEmpty: {
                        message: 'The Message is required and cannot be empty'
                    }
                }
            }
        }
    });
});
