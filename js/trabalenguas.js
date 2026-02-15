"use strict"

// Declaracion
const header = document.querySelector(`.Header`)
const navUl = header.querySelector(`.Nav-ul`)
const navButton = header.querySelector(`.Nav-button`)
const main = document.querySelector(`.main`)
const galleryArticle = main.querySelectorAll(`.Gallery-article`)
const galleryH3 = galleryArticle.querySelector(`.Gallery-h3`)
const galleryInfo = galleryArticle.querySelector(`.Gallery-info`)

// CUANDO CLICK en .Nav-button
// .header-nav LE TOGGLE CLASS isOpen
navButton.addEventListener(`click`, () => {
    navUl.classList.toggle(`isOpen`)
})

// check if it is a touch device
function isTouchDevice() {
    const hasTouchEvents = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    return hasTouchEvents || hasCoarsePointer || !hasFinePointer;
}

// CUANDO CLICK en .Gallery-article
// .Gallery-h3 LE TOGGLE CLASS isHidden
// .Gallery-info LE TOGGLE CLASS isFlex
if (isTouchDevice()){
    galleryArticle.forEach(( eachArticle ) =>{
        eachArticle.addEventListener(`click`, () =>{
            galleryH3.classList.toggle(`isHidden`)
            galleryInfo.classList.toggle(`isFlex`)
        })
    })
}