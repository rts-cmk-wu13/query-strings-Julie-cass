let rootElm = document.documentElement;
let switchElm = document.querySelector("#check");
let isDarkMode = readFromLocalStorage("isDarkMode");
let browserDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
console.log("matchmedia", isDarkMode);
console.log("localStorage", browserDark);



let darkState = null
if (isDarkMode == null) {
    darkState = browserDark;
} else {
    darkState = isDarkMode;
}


if (darkState) {
    console.log("are you there");

    switchElm.checked = true

    rootElm.setAttribute("data-dark", switchElm.checked)
}

else {
    console.log(isDarkMode, browserDark);

    switchElm.checked = false
    rootElm.setAttribute("data-dark", switchElm.checked)
}

switchElm.addEventListener("change", function () {
    console.log(switchElm.checked);

    if (switchElm.checked) {
        rootElm.setAttribute("data-dark", switchElm.checked)
        saveToLocalStorage("isDarkMode", switchElm.checked)

    } else {
        rootElm.setAttribute("data-dark", switchElm.checked)
        saveToLocalStorage("isDarkMode", switchElm.checked)

    }
})