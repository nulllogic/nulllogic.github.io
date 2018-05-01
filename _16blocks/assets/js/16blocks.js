$(document).ready(function () {
	var nav = $('.navbar'),
		hamburger = $('.hamburger');


	jQuery(document).on('click', '.hamburger', function (e) {
		e.preventDefault();
		var _nav = $(this).closest('.navbar');

		if (_nav.hasClass('menu-opened')) {
			_nav.removeClass('menu-opened');
			$(this).removeClass('is-active');
		} else {
			_nav.addClass('menu-opened');
			$(this).addClass('is-active');
		}
	});


});


