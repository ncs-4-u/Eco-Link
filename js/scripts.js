document.addEventListener("DOMContentLoaded", function() {
    // Example: Smooth scrolling for navigation links
    const links = document.querySelectorAll("nav ul li a");

    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
        });
    }
});
