import { Card } from '../../components/Card/Card'
import listaImages from './MateoData'
import './Mateo.css'
import { showSlides } from '../../components/slideShow/slideShow'

export const Mateo = () => {
  const divApp = document.querySelector('main')

  localStorage.setItem('lastPage', 'Mateo')
  divApp.innerHTML = ''
  const headingelement = document.createElement('h2')
  headingelement.textContent = 'El Juego De Mateo'
  divApp.appendChild(headingelement)
  const gameElement = document.createElement('section')
  divApp.appendChild(gameElement)
  gameElement.id = 'gameElement'
  gameElement.classList.add(
    'flex-container',
    'row',
    'green',
    'tapete',
    'slideshow-container'
  )
  // const cardA1 = document.createElement('a')
  // gameElement.appendChild(cardA1)
  // cardA1.id = 'A1'
  // Card(cardA1, listaImages[0].location, null, null, null, '70px', '70px')
  // const cardA2 = document.createElement('a')
  // gameElement.appendChild(cardA2)
  // cardA2.id = 'A2'
  // Card(cardA2, listaImages[1].location, null, null, null, '70px', '70px')
  // const cardA3 = document.createElement('a')
  // gameElement.appendChild(cardA3)
  // cardA3.id = 'A3'
  // Card(cardA3, listaImages[2].location, null, null, null, '70px', '70px')
  listaImages.forEach((image) => {
    const cardA0 = document.createElement('a')
    gameElement.appendChild(cardA0)
    cardA0.classList.add('A0', 'mySlides', 'fade')
    Card(cardA0, image.location, null, null, null, '70px', '70px')
  })

  showSlides('A0')
}
