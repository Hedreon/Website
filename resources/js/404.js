const DynamicElements = document.getElementsByClassName("dynamic");

const FoundPathName = new URL(location.href).pathname.split("/");
const FinalPathName = FoundPathName.pop() || FoundPathName.pop();

const Titles = [
    "Hedreon is offline",
    "Hedreon is not found",
    "Clippy cannot be found",
    `Hedreon: ${FinalPathName}`
]

window.addEventListener("load", function() {
    document.title = Titles[Math.floor(Math.random() * Titles.length)];
    DynamicElements[0].innerHTML = document.title;
})