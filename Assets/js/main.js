var settingsElement = document.getElementById("settings");
var submenuElement = document.getElementById("submenu");

document.getElementById("showSubmenuButton").onclick = function() {
    submenuElement.style.display = "none";
    settingsElement.classList.remove("menu__item--active"); 
    settingsElement.style.filter = "grayscale(100%)";
}

settingsElement.onclick = function() {
    submenuElement.style.display = "block";
    settingsElement.classList.add("menu__item--active"); 
    settingsElement.style.filter = "none";
}

var contentBodyElement = document.querySelector(".content__body");
var contentHeaderElement = document.querySelector(".content__header");
var contentTabsElement = document.querySelector(".content__tabs");

if (contentTabsElement) {
    var heightHeader = contentHeaderElement.offsetHeight + contentTabsElement.offsetHeight;
} else {
    var heightHeader = contentHeaderElement.offsetHeight;
}
contentBodyElement.style.maxHeight = "calc(100% - " + heightHeader + "px)";
contentBodyElement.style.overflow = "auto";

var tableColumnMain = document.getElementById("tableColumnMain");

console.log(tableColumnMain.offsetWidth)