const onDOMContentLoaded = () => {
	nav();
	ourWork();
};

document.readyState !== "loading"
	? onDOMContentLoaded.call()
	: document.addEventListener("DOMContentLoaded", onDOMContentLoaded, false);
