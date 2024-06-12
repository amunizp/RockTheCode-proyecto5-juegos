import { Card } from '../../components/Card/Card'
import listaImages from './MateoData'
import './Mateo.css'
import { showSlides } from '../../components/slideShow/slideShow'
import { selectElement } from '../../components/select/select'
import { shuffleArray } from '../../components/shuffle/shuffle'
var granja = Number(localStorage.getItem('granjas')) || 0
const lastDate = new Date()
var lastTime =
  localStorage.getItem('lastTime') ||
  localStorage.setItem('lastTime', lastDate.toLocaleDateString('es-ES'))
export const Mateo = () => {
  const divApp = document.querySelector('main')

  localStorage.setItem('lastPage', 'Mateo')
  history.pushState('', '', '?page=Mateo#')
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
  shuffleArray(listaImages)
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
  infoAndScore.innerHTML = `<h3>&#x1F6C8; Como Jugar</h3> <p>El objetivo es tocar 3 veces en la misma imagen. Si lo consigues obtienes mas puntos</p> <p>Próximas versiones tendrán mas dificultad</p> <p> Cuando tengas 5 puntos podrás comprar una granja por valor de 5 puntos. La granja te dará un punto automáticamente por cada dia que pase.</p> <h3 id="puntos">Puntuación acumulada: ${
    localStorage.getItem('triplete') || '0'
  } </h3> `
  const farmButton = document.createElement('button')
  divApp.appendChild(farmButton)
  farmButton.textContent = 'Compra una granja por 5 puntos.'

  const fieldSection = document.createElement('section')
  fieldSection.classList.add('flex-container', 'row', 'field')
  divApp.appendChild(fieldSection)
  if (Number(localStorage.getItem('granjas')) > 0) {
    console.log(`Hay granjas `)
    for (
      let index = 0;
      index < Number(localStorage.getItem('granjas'));
      index++
    ) {
      Card(fieldSection, '', '', 'OOO', '', '50px', '50px')
      fieldSection.querySelector('figure:not(.farm)').classList.add('farm')
    }
  }
  farmButton.addEventListener('click', () => {
    if (localStorage.getItem('granjas') > 15) {
      alert('Tienes demasiadas granjas tendras que conseguir otra finca')
      const fieldButton = document.createElement('button')
      divApp.appendChild(fieldButton)
      fieldButton.id = 'fieldButton'
      fieldButton.textContent = 'Consigue una finca nueva'
    } else if (
      localStorage.getItem('triplete') > 5 &&
      localStorage.getItem('triplete') > 0
    ) {
      Card(fieldSection, '', '', 'OOO', '', '50px', '50px')
      localStorage.setItem(
        'triplete',
        `${Number(localStorage.getItem('triplete')) - 5}`
      )
      granja++
      localStorage.setItem('granjas', granja)
      fieldSection.querySelector('figure:not(.farm)').classList.add('farm')
      const pointHeading = document.getElementById('puntos')
      pointHeading.innerHTML = `Puntuación acumulada: ${localStorage.getItem(
        'triplete'
      )}`
    } else {
      alert('No tienes suficientes Puntos!')
    }
  })
  const fieldButton = divApp.querySelector('button')
  fieldButton.addEventListener('click', () => {
    if (localStorage.getItem('triplete') > 179) {
      console.log('Pues a montar una finca!')
      const fieldSection = document.createElement('section')
      fieldSection.classList.add('flex-container', 'row', 'field')
      divApp.appendChild(fieldSection)
    }
  })
}
