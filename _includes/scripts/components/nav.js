const nav = () => {
	var nav = document.querySelector(".l-header");
	var html = document.querySelector("html");
	const toggleButton = document.querySelector(".menu-toggle");
	const headerLinks = document.getElementsByClassName("header-link");

	function stickyNav() {
		window.addEventListener("scroll", function () {
			window.lastScrollTime = new Date().getTime();

			if (
				window.lastScrollTime &&
				new Date().getTime() >= window.lastScrollTime + 500
			)
				return;

			if (this.window.scrollY > 0) {
				nav.classList.add("scrolling");
			} else {
				nav.classList.remove("scrolling");
			}
		});
	}

	function init() {
		toggleButton.addEventListener("click", function () {
			html.classList.toggle("overflow-hidden");
			nav.classList.toggle("menu-visible");
		});
		for (const headerLink of headerLinks) {
			headerLink.addEventListener("click", function () {
				html.classList.remove("overflow-hidden");
				nav.classList.remove("menu-visible");
			});
		}

		stickyNav();
	}

	init();
};