import './slideShow.css'
let slideIndex = 1
export function showSlides(selectorClass) {
  let i

  let slides = document.getElementsByClassName(selectorClass)

  slideIndex++
  console.log(slideIndex)
  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  slides[slideIndex - 1].classList.toggle('mySlides')

  setTimeout(showSlides(selectorClass), 2000) // Change image every 2 seconds
}
