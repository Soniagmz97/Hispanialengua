"use strict"

const carrouselContainer = document.querySelectorAll(`.Carrousel-container`)
const menuButton = document.querySelector(`.Aside-button`)
const menuUl = document.querySelector(`.Aside-ul`)

// Menu button
menuButton.addEventListener(`click`, () => {
    menuUl
})

// Carrousel
carrouselContainer.forEach((eachCarrousel) => {
    let indiceActual = 0
    const carrouselUl = eachCarrousel.querySelector(`.Carrousel-ul`)
    const carrouselApartados = eachCarrousel.querySelectorAll(`.Carrousel-apartado`)
    const prev = eachCarrousel.querySelector(`.Carrousel-prev`)
    const next = eachCarrousel.querySelector(`.Carrousel-next`)
    const ancho = 100 / carrouselApartados.length

    // Next
    next.addEventListener(`click`, () =>{
        indiceActual++

        if (indiceActual >= carrouselApartados.length){
            indiceActual = 0
        }

        carrouselUl.style.transform = `translateX(-${indiceActual* ancho}%)`
    })

    // Prev
    prev.addEventListener(`click`, () =>{
        indiceActual--

        if (indiceActual < 0){
            indiceActual = carrouselApartados.length - 1
        }

        carrouselUl.style.transform = `translateX(-${indiceActual* ancho}%)`
    })
})