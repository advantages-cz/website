const ourWork = () => {
    const industryLinks = document.querySelectorAll(".our-work .industry");
    const industryContentNodes = document.querySelectorAll(".our-work .content");

    function activateIndustryLink(industryId) {
        for (const industryLink of industryLinks) {
            if (industryLink.id === industryId) {
                industryLink.classList.add("active");
			}
			else
			{
                industryLink.classList.remove("active");
			}
        }
    }
	function activateContent(industryId) {
		const contentId = industryId + "-content";
        for (const contentNode of industryContentNodes) {
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
		for (const industryLink of industryLinks) {
        industryLink.addEventListener("click", function () {
			activateIndustryLink(industryLink.id);
			activateContent(industryLink.id);
            });
        }
    }

    init();
};