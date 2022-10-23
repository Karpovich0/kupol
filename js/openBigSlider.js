const SWIPER_ONE_SLIDERS = document.querySelectorAll(".swiper-slide-one");
const SLIDER_COVER = document.querySelector(".slider-cover");
const CLOSE_ARRAY = document.querySelectorAll(".close");
const BODY = document.querySelector("body");

SWIPER_ONE_SLIDERS.forEach((item) =>
	item.addEventListener("click", function () {
		SLIDER_COVER.classList.add("visible-slider");
		BODY.classList.add("body-burger");
	})
);

CLOSE_ARRAY.forEach((item) =>
	item.addEventListener("click", function () {
		SLIDER_COVER.classList.remove("visible-slider");
		BODY.classList.remove("body-burger");
	})
);
