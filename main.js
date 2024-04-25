let menuButton = document.querySelector(".menu-button");
let mainNav = document.querySelector(".main-nav");
let hide = document.querySelector(".hide");
let body = document.querySelector("html, body")

function ham() {
    console.log("cum")
    menuButton.setAttribute("onclick", "nonham()");
    mainNav.style.cssText = "display: inline-flex";
    menuButton.style.cssText = "background: url(images/icon-close.svg); background-repeat: no-repeat; height: 19px"
    hide.style.cssText = "display: block"
    body.style.cssText = "overflow-y: hidden"
}

function nonham() {
    menuButton.setAttribute("onclick", "ham()")
    mainNav.style.cssText = "display: none";
    menuButton.style.cssText = "background: url(images/icon-hamburger.svg"
    hide.style.cssText = "display: none"
    body.style.cssText = "overflow-y: auto"
}