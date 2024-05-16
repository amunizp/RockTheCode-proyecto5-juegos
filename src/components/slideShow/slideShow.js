import './slideShow.css'
//TODO si estoy en este juego y salto a otra página tengo error "Uncaught TypeError: undefined has no properties" no se porque.
let slideIndex = 1

export function showSlides(selectorClass) {
  let i
  let slides = document.getElementsByClassName(selectorClass)
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slideIndex++

  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = 'block'

  setTimeout(() => {
    showSlides(selectorClass)
  }, 1000) // Change image every 2 seconds
}
