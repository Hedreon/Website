const DynamicElements = document.getElementsByClassName("dynamic");
const NavigatorElements = document.getElementsByTagName("navigator");

function GetRelativeTime() {
    const NewDate = new Date();
    const CurrentHour = NewDate.getHours();

    if (CurrentHour <= 11 && CurrentHour != 0) {
        return "morning"
    } else if (CurrentHour >= 12 && CurrentHour <= 18) {
        return "afternoon"
    } else if (CurrentHour >= 18 && CurrentHour <= 21) {
        return "evening"
    } else if (CurrentHour >= 21 || CurrentHour == 0) {
        return "night"
    }
}

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

window.addEventListener("load", function() {
    DynamicElements[0].innerHTML = `Best wishes and good ${GetRelativeTime()},`;
})