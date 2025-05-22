document.addEventListener("DOMContentLoaded", function () {
const links = document.querySelectorAll("#TOC nav a");
links.forEach(link => {
    link.addEventListener("click", () => {
    document.body.classList.add("hide-toc");
    });
});
});