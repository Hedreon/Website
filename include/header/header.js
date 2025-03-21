const NavigatorElements = document.getElementsByClassName("navigator");

window.addEventListener("load", function() {
    for (let Index = 0; Index < NavigatorElements.length; Index++) {
        if (document.location.href.indexOf(NavigatorElements[Index].href) >= 0) {
            NavigatorElements[Index].className = "navigator active";
        }
    }
});