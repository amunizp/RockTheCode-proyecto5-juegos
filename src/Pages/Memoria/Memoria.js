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
    // const saveImage = cardA.firstChild.querySelector('img')
    cardA.querySelector('figcaption').classList.toggle('hideCaption')

    cardA.addEventListener(
      'click',
      function voltea(_event) {
        cardA.querySelector('figcaption').classList.toggle('hideCaption')

        cardA.querySelector('img').classList.toggle('hideImage')
        cardA.classList.toggle('flipped')
        var elementsFlipped = document.getElementsByClassName('flipped')

        console.log(elementsFlipped)
        if (elementsFlipped.length > 1) {
          // console.log(
          //   `primer elemento ${elementsFlipped[0].innerHTML} y segundo elemento ${elementsFlipped[1].innerHTML}`
          // )
          let elementFlipped01 = elementsFlipped[0]
          let elementFlipped02 = elementsFlipped[1]
          if (
            elementFlipped01.querySelector('h3').innerHTML ===
            elementFlipped02.querySelector('h3').innerHTML
          ) {
            console.log(elementsFlipped[0].querySelector('h3').innerHTML)
            console.log(elementsFlipped[1].querySelector('h3').innerHTML)
            console.log('son iguales!')
            // cardA.classList.toggle('flipped')
            elementFlipped01.classList.add('paired')
            elementFlipped02.classList.add('paired')
            //TODO creando una nueva colleccion aun solo quita al ultimo elemento
            //?https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener#coincidiendo_disparadores_de_evento_para_su_eliminaci%C3%B3n
            // var emparejadas = document.getElementsByClassName('paired')
            // for (const carta of emparejadas) {
            //   carta.removeEventListener('click', voltea, false)
            // }
            //TODO con esto quita el segundo pero no el primero. Si lo pongo al reves hace al reves
            // elementFlipped02.removeEventListener('click', voltea)
            // elementFlipped01.removeEventListener('click', voltea)
            //TODO esto lo saque de aqui pero lo que hace es copiar el elemento sin el evento: https://stackoverflow.com/questions/4386300/javascript-dom-how-to-remove-all-event-listeners-of-a-dom-object PERO FUNCIONA!
            // elementFlipped01.outerHTML = elementFlipped01.outerHTML
            // elementFlipped02.outerHTML = elementFlipped02.outerHTML
            elementFlipped01.classList.toggle('flipped')
            elementFlipped02.classList.toggle('flipped')
            elementFlipped01.replaceWith(elementFlipped01.cloneNode(true))
            elementFlipped02.replaceWith(elementFlipped02.cloneNode(true))

            //TODO con esto hace solo el ultimo.
            //cardA.removeEventListener('click', voltea)
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
