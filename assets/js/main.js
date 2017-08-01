$(function(){

	var $window = $(window);

	$('section[data-type="background"]').each(function(){

		var $bgobj = $(this); //asign obj
		console.log($bgobj);
		$(window).scroll(function(){

			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			var coords = '50% '+ yPos + 'px';

			console.log(coords);
			//move bg
			$bgobj.css({backgroundPosition: coords})
		});

	});

	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.navbar-fixed-top').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();

	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;

	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('.navbar-fixed-top').removeClass('nav-down').addClass('nav-up');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('.navbar-fixed-top').removeClass('nav-up').addClass('nav-down');
	        }
	    }

	    lastScrollTop = st;
	}


	// $('.carousel').carousel('cycle');


// way points
// $('.goalz').css('opacity', 0);
//
// var waypoints = $('.goalz').waypoint(function(){
//
// 		 $('.goalz').addClass('fadeInUp');
//
// },{ offset: '88%'});
//
// $('.carousel-caption').css('opacity', 0);
//
// var waypoints2 = $('.carousel-caption').waypoint(function(){
//
// 		 $('.carousel-caption').addClass('fadeInUp');
//
// },{ offset: '88%'});
//
// $('.join-the-family').css('opacity', 0);
//
// var waypoints3 = $('.join-the-family').waypoint(function(){
//
// 		 $('.join-the-family').addClass('fadeInUp');
//
// },{ offset: '88%'});
//
// $('.brands').css('opacity', 0);
//
// var waypoints4 = $('.brands').waypoint(function(){
//
// 		 $('.brands').addClass('fadeInUp');
//
// },{ offset: '88%'});

}); // end document ready
