const MessageElements = document.getElementsByClassName("message");

const FoundPathName = new URL(location.href).pathname.split("/");
const PoppedPathName = FoundPathName.pop() || FoundPathName.pop();
const FinalPathName = PoppedPathName.charAt(0).toUpperCase() + PoppedPathName.slice(1);

const Messages = [
    "Hedreon is not found",
    "There ain't nothing here",
    "My potato died again...",
    "Clippy cannot be found",
    `Hedreon: ${FinalPathName}`
];

window.addEventListener("load", function() {
    MessageElements[0].innerHTML = Messages[Math.floor(Math.random() * Messages.length)];
});