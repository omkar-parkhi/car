// JavaScript Document

$(".owl-carousel").owlCarousel({
	autoplay:true,
	autoplayHoverPause:true,
	items:1,
	dots:true,
	loop:true,
	lazyload:true,
	margin:5,
	stagePadding:5,
	responsive:{
		0:{
			items:1,
			dots:false	
		},
		485:{
			items:1,
			dots:false	
		},
		728:{
			items:1,
			loop:true
		},
		960:{
			items:3,
			loop:true	
		},
		1200:{
			items:4,
			dots:true	
		}
	}
	});