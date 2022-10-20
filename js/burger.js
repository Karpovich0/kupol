"use strict";
const HEADER = document.querySelector(".header");

const TO_TOP = document.querySelector(".to-top");
const BURGER = document.querySelector(".burger");
const BODY = document.querySelector("body");

let isBurgerOpened = false;

HEADER.classList.add("header-black");
BURGER.classList.add("burger-black");

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

	if (!isBurgerOpened) {
		isBurgerOpened = true;
	} else if (isBurgerOpened) {
		BURGER.classList.add("burger-black");
		isBurgerOpened = false;
	}
});
