const ONE = document.querySelectorAll(".one");

window.addEventListener("resize", function () {
	addColspan();
});
addColspan();
function addColspan() {
	if (window.innerWidth < 768) {
		ONE.forEach((element) => {
			element.setAttribute("colspan", "2");
		});
	} else {
		ONE.forEach((element) => {
			element.removeAttribute("colspan");
		});
	}
}
