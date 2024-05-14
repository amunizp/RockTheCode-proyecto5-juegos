//TODO Memory Game

// Para nuestro juego de memoria tendremos una serie de cartas, pueden ser imágenes o divs con colores, el apartado visual como siempre queda a vuestra elección.

// Para el funcionamiento del juego tenemos que tener en cuenta que cuando hagamos click en una carta esta se dará la vuelta, controlaremos cuando el usuario hace el segundo click para levantar una segunda, se compararán y si son iguales se quedarán levantadas y ganaremos un punto, si no coinciden se volverán a dar la vuelta. https://www.w3schools.com/howto/howto_css_flip_card.asp

import { Card } from '../../components/Card/Card'
import { shuffleArray } from '../../components/shuffle/shuffle'
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

  shuffleArray(listaImages)
  listaImages.forEach((element) => {
    const cardA = document.createElement('a')
    gameElement.appendChild(cardA)
    Card(cardA, element.location, element.letra, '', '', '50px', '50px')
    // const saveImage = cardA.firstChild.querySelector('img')
    cardA.querySelector('figcaption').classList.toggle('hideCaption')

    cardA.addEventListener(
      'click',
      function voltea(event) {
        cardA.querySelector('figcaption').classList.toggle('hideCaption')

        cardA.querySelector('img').classList.toggle('hideImage')
        cardA.classList.toggle('flipped')
        var elementsFlipped = document.getElementsByClassName('flipped')

        console.log(elementsFlipped)
        if (elementsFlipped.length > 1) {
          if (
            elementsFlipped[0].querySelector('h3').innerHTML ===
            elementsFlipped[1].querySelector('h3').innerHTML
          ) {
            console.log(elementsFlipped[0].querySelector('h3').innerHTML)
            console.log(elementsFlipped[1].querySelector('h3').innerHTML)
            console.log('son iguales!')
            // elementsFlipped[0].classList.add('paired')
            // elementsFlipped[1].classList.add('paired')
            //TODO creando una nueva colleccion aun solo quita al ultimo elemento
            //?https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener#coincidiendo_disparadores_de_evento_para_su_eliminaci%C3%B3n
            //! funciona por que le di la clase Paired
            document.querySelectorAll('.flipped').forEach(function (el) {
              //?no se porque el primer evento no se quita
              el.removeEventListener('click', voltea, false)
              el.classList.toggle('flipped')
              el.classList.add('paired')
            })
            //TODO esto lo saque de aqui pero lo que hace es copiar el elemento sin el evento: https://stackoverflow.com/questions/4386300/javascript-dom-how-to-remove-all-event-listeners-of-a-dom-object PERO FUNCIONA!
            // elementFlipped01.outerHTML = elementFlipped01.outerHTML
            // elementFlipped02.outerHTML = elementFlipped02.outerHTML
            //! o esto que parece que es mejor:
            // elementFlipped01.replaceWith(elementFlipped01.cloneNode(true))
            // elementFlipped02.replaceWith(elementFlipped02.cloneNode(true))
          } else {
            console.log('son distintos')

            //TODO modern solution https://stackoverflow.com/questions/22270664/how-to-remove-a-class-from-elements-in-pure-javascript might be best?
            document.querySelectorAll('.flipped').forEach(function (el) {
              el.querySelector('figcaption').classList.toggle('hideCaption')
              el.querySelector('img').classList.toggle('hideImage')
              el.classList.toggle('flipped')
            })
          }
        }
      },
      { passive: true }
    )
  })
}
