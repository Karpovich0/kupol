"use strict";
const HEADER = document.querySelector(".header");
const SWIPER_PREV = document.querySelector(".swiper-prev");
const SWIPER_NEXT = document.querySelector(".swiper-next");

const TO_TOP = document.querySelector(".to-top");
const BURGER = document.querySelector(".burger");
const BODY = document.querySelector("body");

let isSwiperAutoPlay = true;
let isBurgerOpened = false;

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

HEADER.classList.add("header-black");
SWIPER_PREV.classList.add("swiper-arrow");
SWIPER_NEXT.classList.add("swiper-arrow");
BURGER.classList.add("burger-black");

swiper.on("slideChange", function () {
	if (scrollY == 0) {
		if (swiper.realIndex == 0) {
			HEADER.classList.add("header-black");
			BURGER.classList.add("burger-black");
			SWIPER_PREV.classList.add("swiper-arrow");
			SWIPER_NEXT.classList.add("swiper-arrow");
		} else {
			HEADER.classList.remove("header-black");
			BURGER.classList.remove("burger-black");
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

TO_TOP.addEventListener("click", function () {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

BURGER.addEventListener("click", function () {
	HEADER.classList.toggle("header-burger");
	BODY.classList.toggle("body-burger");

	if (BURGER.classList.contains("burger-black")) {
		BURGER.classList.remove("burger-black");
	}

	if (isSwiperAutoPlay) {
		swiper.autoplay.stop();
		isSwiperAutoPlay = false;
	} else {
		swiper.autoplay.start();
		isSwiperAutoPlay = true;
	}
	if (!isBurgerOpened) {
		isBurgerOpened = true;
	} else if (isBurgerOpened) {
		if (swiper.realIndex == 0) {
			BURGER.classList.add("burger-black");
		}
		isBurgerOpened = false;
	}
});
