import { Card } from '../../components/Card/Card'
import listaImages from './MateoData'
import './Mateo.css'
import { showSlides } from '../../components/slideShow/slideShow'
import { selectElement } from '../../components/select/select'

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
    'column',
    'green',
    'tapete',
    'slideshow-container'
  )

  listaImages.forEach((image) => {
    const cardA0 = document.createElement('a')
    gameElement.appendChild(cardA0)
    cardA0.classList.add('A0', 'mySlides', 'fade')
    Card(cardA0, image.location, null, null, null, '70px', '70px')
    cardA0.addEventListener('click', () => {
      selectElement(cardA0)
    })
  })

  showSlides('A0')
  const divSelected = document.createElement('div')
  divSelected.classList.add('flex-container', 'row')
  divSelected.id = 'selected'
  gameElement.appendChild(divSelected)
  const infoAndScore = document.createElement('article')
  divApp.appendChild(infoAndScore)
  infoAndScore.innerHTML = `<h3>&#x1F6C8; Como Jugar</h3> <p>El objetivo es tocar 3 veces en la misma imagen. Si lo consigues obtienes mas puntos</p> <p>Próximas versiones tendrán mas dificultad</p> <h3 id="puntos">Puntuación acumulada: ${
    localStorage.getItem('triplete') || '0'
  } </h3> `
}
