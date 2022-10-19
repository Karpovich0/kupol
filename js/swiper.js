const HEADER = document.querySelector(".header");
const SWIPER_PREV = document.querySelector(".swiper-prev");
const SWIPER_NEXT = document.querySelector(".swiper-next");

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
	// autoplay: {
	// 	delay: 3000,
	// 	disableOnInteraction: false,
	// },
});

HEADER.classList.add("header-black");
SWIPER_PREV.classList.add("swiper-arrow");
SWIPER_NEXT.classList.add("swiper-arrow");

swiper.on("slideChange", function () {
	if (scrollY == 0) {
		if (swiper.realIndex == 0) {
			HEADER.classList.add("header-black");
			SWIPER_PREV.classList.add("swiper-arrow");
			SWIPER_NEXT.classList.add("swiper-arrow");
		} else {
			HEADER.classList.remove("header-black");
			SWIPER_PREV.classList.remove("swiper-arrow");
			SWIPER_NEXT.classList.remove("swiper-arrow");
		}
	}
});

window.addEventListener("scroll", function () {
	if (scrollY > 34) {
		HEADER.classList.add("header-visible");
		HEADER.classList.add("header-black");
		swiper.autoplay.stop();
	} else {
		HEADER.classList.remove("header-visible");
		if (swiper.realIndex != 0) {
			HEADER.classList.remove("header-black");
		}
		swiper.autoplay.start();
	}
});
