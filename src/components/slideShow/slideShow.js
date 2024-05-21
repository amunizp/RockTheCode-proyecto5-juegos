import './slideShow.css'
//TODO si estoy en este juego y salto a otra página tengo error "Uncaught TypeError: undefined has no properties" no se porque.
let slideIndex = 1
let speed
export function showSlides(selectorClass, dificultad = 'media') {
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
  if (dificultad === 'fácil') {
    speed = 1000
  } else if (dificultad === 'difícil') {
    speed = 500
  } else if (dificultad === 'media') {
    speed = 750
  }
  setTimeout(() => {
    showSlides(selectorClass)
  }, speed) // Change image every 2 seconds
}
