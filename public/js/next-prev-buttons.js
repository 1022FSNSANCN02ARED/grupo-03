const sections = [
    {
        type: "cottage",
        container: document.querySelector(".cont-cottage"),
        nav: document.querySelector("#cottage-list"),
        containerWidth: 0,
        navScrollWidth: 0,
        scrollPosition: 0,
    },
    {
        type: "activity",
        container: document.querySelector(".cont-activity"),
        nav: document.querySelector("#activity-list"),
        containerWidth: 0,
        navScrollWidth: 0,
        scrollPosition: 0,
    },
];

sections.forEach((section) => {
    section.containerWidth = section.container.offsetWidth;
    section.navScrollWidth = section.nav.scrollWidth;

    const prevBtn = document.querySelector(`#prev-btn-${section.type}`);
    const nextBtn = document.querySelector(`#next-btn-${section.type}`);

    prevBtn.addEventListener("click", (e) => {
        section.scrollPosition -= section.containerWidth;
        if (section.scrollPosition < 0) {
            section.scrollPosition =
                section.navScrollWidth - section.containerWidth;
        }
        animateScroll(section.nav, section.scrollPosition);
    });

    nextBtn.addEventListener("click", (e) => {
        section.scrollPosition += section.containerWidth;
        if (
            section.scrollPosition >
            section.navScrollWidth - section.containerWidth
        ) {
            section.scrollPosition = 0;
        }
        animateScroll(section.nav, section.scrollPosition);
    });
});

function animateScroll(element, scrollPos) {
    element.style.transition = "transform 0.3s ease";
    element.style.transform = `translateX(-${scrollPos}px)`;

    setTimeout(function () {
        element.style.transition = "";
    }, 300);
}
