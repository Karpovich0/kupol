const swiper = new Swiper(".swiper", {
	// arrows
	navigation: {
		prevEl: ".swiper-prev",
		nextEl: ".swiper-next",
	},
	grabCursor: true,
	loop: true,
	slidesPerView: 1,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});
