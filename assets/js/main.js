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

	$('.carousel').carousel('cycle');


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
