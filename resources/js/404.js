const DynamicElements = document.getElementsByClassName("dynamic");

const Titles = [
    "Hedreon is offline",
    "Hedreon is not found",
    "Clippy cannot be found",
    `Hedreon: ${location.href.substring(location.href.lastIndexOf("/") + 1)}`
]

window.addEventListener("load", function() {
    document.title = Titles[Math.floor(Math.random() * Titles.length)];
    DynamicElements[0].innerHTML = document.title;
})