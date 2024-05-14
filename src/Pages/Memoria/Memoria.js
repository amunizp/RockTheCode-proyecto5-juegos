//TODO Memory Game

// Para nuestro juego de memoria tendremos una serie de cartas, pueden ser imágenes o divs con colores, el apartado visual como siempre queda a vuestra elección.

// Para el funcionamiento del juego tenemos que tener en cuenta que cuando hagamos click en una carta esta se dará la vuelta, controlaremos cuando el usuario hace el segundo click para levantar una segunda, se compararán y si son iguales se quedarán levantadas y ganaremos un punto, si no coinciden se volverán a dar la vuelta. https://www.w3schools.com/howto/howto_css_flip_card.asp

import { Card } from '../../components/Card/Card'
import './Memoria.css'
import listaImages from './MemoriaData'

export const Memoria = () => {
  const divApp = document.querySelector('main')
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
    saveCaption.classList.toggle('hideCaption')
    cardA.addEventListener('click', function voltea(event) {
      saveCaption.classList.toggle('hideCaption')
      saveImage.classList.toggle('hideImage')
      cardA.classList.toggle('flipped')
      var elementsFlipped = document.getElementsByClassName('flipped')
      console.log(elementsFlipped.length)
      console.log(elementsFlipped)
      if (elementsFlipped.length > 1) {
        // console.log(
        //   `primer elemento ${elementsFlipped[0].innerHTML} y segundo elemento ${elementsFlipped[1].innerHTML}`
        // )
        if (
          elementsFlipped[0].querySelector('h3').innerHTML ===
          elementsFlipped[1].querySelector('h3').innerHTML
        ) {
          console.log(elementsFlipped[0].querySelector('h3').innerHTML)
          console.log(elementsFlipped[1].querySelector('h3').innerHTML)
          console.log('son iguales!')
          // cardA.classList.toggle('flipped')
          //TODO con esto quita el segundo pero no el primero. Si lo pongo al reves hace al reves
          elementsFlipped[1].removeEventListener('click', voltea)
          elementsFlipped[0].removeEventListener('click', voltea)
          console.log(elementsFlipped[0].innerHTML)
          //TODO con esto hace solo el ultimo.
          //cardA.removeEventListener('click', voltea)

          // cardA.removeEventListener('click', voltea)
        } else {
          console.log('son distintos')
          saveCaption.classList.toggle('hideCaption')
          saveImage.classList.toggle('hideImage')
          cardA.classList.toggle('flipped')
          console.log(
            elementsFlipped[0].closest('figure').querySelector('figcaption')
          )
          elementsFlipped[0]
            .closest('figure')
            .querySelector('figcaption')
            .classList.toggle('hideCaption')
          console.log(elementsFlipped[0].closest('figure').querySelector('img'))
          elementsFlipped[0]
            .closest('figure')
            .querySelector('img')
            .classList.toggle('hideImage')
          var flippedCard = document.querySelector('.flipped')
          flippedCard.classList.toggle('flipped')
        }
      }
    })
  })
}
