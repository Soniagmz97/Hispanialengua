"use strict"

// Declaracion
const header = document.querySelector(`.Header`)
const navUl = header.querySelector(`.Nav-ul`)
const navButton = header.querySelector(`.Nav-button`)
const main = document.querySelector(`.main`)
const mainChoice = main.querySelectorAll(`.main-choice`)
const choiceDichos = main.querySelector(`.main-choice--dichos`)
const choiceRefranes = main.querySelector(`.main-choice--refranes`)
const dichos = main.querySelector(`.main-dichos`)
const refranes = main.querySelector(`.main-refranes`)

// Functions
const mostrarDichos = () =>{
    dichos.classList.remove(`isHidden`)
    refranes.classList.add(`isHidden`)
}
const mostrarRefranes = () =>{
    refranes.classList.remove(`isHidden`)
    dichos.classList.add(`isHidden`)
}

// CUANDO CLICK en .Nav-button
// .header-nav LE TOGGLE CLASS isOpen
navButton.addEventListener(`click`, () => {
    navUl.classList.toggle(`isOpen`)
})

// CUANDO CLICK en .main-choice
// LE REMOVE CLASS isSelected
mainChoice.forEach(( eachChoice ) =>{
    eachChoice.addEventListener(`click`, () =>{
        mainChoice.forEach((eachChoice) =>{
            eachChoice.classList.remove(`isSelected`)
        })
        eachChoice.classList.add(`isSelected`)
    })
})