$(function () {
	$('.video__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('.dropdown__title').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
	
	$('.teacher__icons-item').click(function (event) {
	$(this).toggleClass('active').next().slideToggle(300);
	});
})