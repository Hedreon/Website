const NavigatorElements = document.getElementsByTagName("navigator");

for (let Index = 0; Index < NavigatorElements.length; Index++) {
    NavigatorElements[Index].addEventListener("mouseup", (Event) => {
        if (NavigatorElements[Index].getAttribute("link")) {
            switch (Event.button) {
                case 0:
                    window.location.href = NavigatorElements[Index].getAttribute("link");
                    break;
                case 1:
                    Event.preventDefault();

                    window.open(NavigatorElements[Index].getAttribute("link"), "_blank", "noopener, noreferrer");

                    return false;
            }
        }
    })
}