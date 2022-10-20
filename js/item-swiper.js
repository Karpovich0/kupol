let isSwiperAutoPlay = true;
let isBurgerOpened = false;

const swiper2 = new Swiper(".swiper-two", {
	spaceBetween: 10,
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
	grabCursor: true,
	// pagination: {
	// 	el: ".swiper-pagination",
	// 	clickable: true,
	// },
	thumbs: {
		swiper: swiper2,
	},
});

// HEADER.classList.add("header-black");
// SWIPER_PREV.classList.add("swiper-arrow");
// SWIPER_NEXT.classList.add("swiper-arrow");
// BURGER.classList.add("burger-black");

// swiper.on("slideChange", function () {
// 	if (scrollY == 0) {
// 		if (swiper.realIndex == 0) {
// 			HEADER.classList.add("header-black");
// 			BURGER.classList.add("burger-black");
// 			SWIPER_PREV.classList.add("swiper-arrow");
// 			SWIPER_NEXT.classList.add("swiper-arrow");
// 		} else {
// 			HEADER.classList.remove("header-black");
// 			BURGER.classList.remove("burger-black");
// 			SWIPER_PREV.classList.remove("swiper-arrow");
// 			SWIPER_NEXT.classList.remove("swiper-arrow");
// 		}
// 	}
// });
