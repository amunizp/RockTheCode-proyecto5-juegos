//TODO Memory Game

// Para nuestro juego de memoria tendremos una serie de cartas, pueden ser imágenes o divs con colores, el apartado visual como siempre queda a vuestra elección.

// Para el funcionamiento del juego tenemos que tener en cuenta que cuando hagamos click en una carta esta se dará la vuelta, controlaremos cuando el usuario hace el segundo click para levantar una segunda, se compararán y si son iguales se quedarán levantadas y ganaremos un punto, si no coinciden se volverán a dar la vuelta. https://www.w3schools.com/howto/howto_css_flip_card.asp

import { Card } from '../../components/Card/Card'
import './Memoria.css'
import listaImages from './MemoriaData'

export const Memoria = () => {
  const divApp = document.querySelector('main')
  var clickcount = 0
  var visibleCards = []
  localStorage.setItem('lastPage', 'Memoria')
  divApp.innerHTML = ''
  const headingelement = document.createElement('h2')
  headingelement.textContent = 'Juego De Memoria'
  divApp.appendChild(headingelement)
  const gameElement = document.createElement('section')
  divApp.appendChild(gameElement)
  gameElement.classList.add('gridCards', 'green', 'tapete')

  listaImages.forEach((element) => {
    const cardA = document.createElement('a')
    gameElement.appendChild(cardA)
    Card(cardA, element.location, element.letra, '', '', '50px', '50px')
    const saveImage = cardA.firstChild.querySelector('img')
    const saveCaption = cardA.firstChild.querySelector('figcaption')
    saveCaption.remove()
    cardA.addEventListener('click', () => {
      if (cardA.firstChild.querySelector('img')) {
        cardA.classList.toggle('shown')
        cardA.firstChild.querySelector('img').remove()
        cardA.firstChild.appendChild(saveCaption)
        clickcount += 1
        visibleCards.push(element.letra)
        console.log(element.letra)
        if (clickcount > 1) {
          if (visibleCards[0] === visibleCards[1]) {
            console.log(`son iguales! ${visibleCards}`)
            //TODO igual quitar todo esto con un check win? una funcion aparte?
            //TODO tengo que dejarlas visibles asi que mejor será crear un elemento fuera con las cartas emparejadas.
            var shownElements = document.getElementsByClassName('shown')
            console.log(shownElements)
            for (const element of shownElements) {
              element.classList.add('paired')
              removeEventListener('click', element)
            }

            visibleCards = []

            // removeEventListener('click', cardA)
          } else if (
            visibleCards[0] &&
            visibleCards[1] &&
            visibleCards[0] != visibleCards[1]
          ) {
            console.log(
              `No son iguales! ${visibleCards}, numero de cartas clicadas ${clickcount}`
            )
            shownElements = document.getElementsByClassName('shown')
            console.log(shownElements)
            for (const element of shownElements) {
              console.log(element)
              element.firstChild.querySelector('figcaption').remove()
              element.classList.toggle('shown')
              element.firstChild.appendChild(saveImage)
            }
            clickcount -= 2
            visibleCards = []
          }
        }
      } else {
        cardA.firstChild.querySelector('figcaption').remove()
        cardA.classList.toggle('shown')
        cardA.firstChild.appendChild(saveImage)
        clickcount -= 1
        const location = visibleCards.indexOf(element.letra)
        console.log(`I removed ${visibleCards.splice(location, 1)}`)
        console.log(`the list is now ${visibleCards}`)
      }

      // cardA.firstChild.querySelector('img').alt = ''
      console.log(
        ` ${clickcount} cartas visibles. se ve ${visibleCards[0]}  y ${visibleCards[1]}`
      )

      // if (visibleCards[0] === visibleCards[1]) {
      //   console.log(`son iguales! ${visibleCards}`)
      // }
    })
  })
}
