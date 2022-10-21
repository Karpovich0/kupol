const swiper2 = new Swiper(".swiper-two", {
	spaceBetween: 20,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
});

const swiper = new Swiper(".swiper-one", {
	// arrows
	navigation: {
		prevEl: ".swiper-prev",
		nextEl: ".swiper-next",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	grabCursor: true,
	thumbs: {
		swiper: swiper2,
	},
});
