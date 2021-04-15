$(function () {

	var mixer = mixitup('.products__items');
	var mixer = mixitup('.design__items');

	$('.footer-top__title').on('click', function () {
		$(this).next().slideToggle();
		$(this).toggleToggle('active');
	});

	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});

	$('.top-slider__inner').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$('.products__btn').on('click', function () {
		$('.products__btn').removeClass('products__btn--active');
		$(this).addClass('products__btn--active');
	});

	$('.design__btn').on('click', function () {
		$('.design__btn').removeClass('design__btn--active');
		$(this).addClass('design__btn--active');
	});



});