const DynamicElements = document.getElementsByClassName("dynamic");

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

window.addEventListener("load", function() {
    DynamicElements[0].innerHTML = `Best wishes and good ${GetRelativeTime()},`;
})