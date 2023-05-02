const inputField = ".field";
let queriedInput = document.querySelector(inputField);

function isValidColor(color) {
    return /^#([0-9a-f]{3}){1,2}$/i.test(color) || /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i.test(color) || /^\d{1,3},\s*\d{1,3},\s*\d{1,3}$/i.test(color);
}

function changeColor(colorR, colorG, colorB, textAccepted, text) {
    if (!colorR && !colorG && !colorB && textAccepted && text != null) {
        document.body.style.backgroundColor = text;
    } else {
        document.body.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
    }
}

function parseValues(redValue, greenValue, blueValue) {
    const red = parseInt(redValue);
    const green = parseInt(greenValue);
    const blue = parseInt(blueValue);

    return { red, green, blue };
}

function parseColor(value) {
    if (value.startsWith("#")) {
        // HEX
        changeColor(null, null, null, true, value);
    } else if (value.match(/^(\d+),\s*(\d+),\s*(\d+)$/)) {
        // RGB
        const pattern = value.split(",").map(val => parseInt(val.trim()));

        if (pattern.length !== 3) {
            return;
        }

        const { red, green, blue } = parseValues(pattern[0], pattern[1], pattern[2]);
        changeColor(red, green, blue, false, null);
    } else if (value.startsWith("rgb(")) {
        // Vanilla RGB
        const pattern = value.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);

        if (pattern) {
            const { red, green, blue } = parseValues(pattern[1], pattern[2], pattern[3]);
            changeColor(red, green, blue, false, null);
        }
    } else {
        return;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    queriedInput = document.querySelector(inputField);

    queriedInput.addEventListener("input", function () {
        if (isValidColor(this.value)) {
            parseColor(this.value);
        } else {
            return;
        }
    });
});