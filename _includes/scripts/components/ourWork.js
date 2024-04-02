const ourWork = () => {
    const categoryLinks = document.querySelectorAll(".our-work .category");
    const categoryContentNodes = document.querySelectorAll(".our-work .content");

    function activateCategoryLink(categoryId) {
        for (const categoryLink of categoryLinks) {
            if (categoryLink.id === categoryId) {
                categoryLink.classList.add("active");
			}
			else
			{
                categoryLink.classList.remove("active");
			}
        }
    }
	function activateContent(categoryId) {
		const contentId = categoryId + "-content";
        for (const contentNode of categoryContentNodes) {
            if (contentNode.id === contentId) {
                contentNode.classList.add("visible");
			}
			else
			{
                contentNode.classList.remove("visible");
			}
        }
    }

    function init() {
		for (const categoryLink of categoryLinks) {
        categoryLink.addEventListener("click", function () {
			activateCategoryLink(categoryLink.id);
			activateContent(categoryLink.id);
        });
    }
    }

    init();
};