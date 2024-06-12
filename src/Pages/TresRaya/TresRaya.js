//? Tres en raya
// Para el juego del tres en raya tendremos en el apartado visual un tablero de juego de 3x3, también, tendremos dos botones para elegir quien comienza jugando, si las "X" o los "O", en el momento de la elección desaparecerán los botones y el resto de turnos irán cambiando al contrario, si acaba de jugar "X" le tocará en el siguiente a "O".
// Habrá que tener en cuenta que no se pueda sustituir el valor de una casilla ya marcada.
// Queremos controlar cuando alguien gana haciendo comprobaciones o cuando se queda empate, en ambos casos el resultado se puede mostrar en un alert.
// En cuanto a maquetación no tiene por qué ser muy complicado mientras cumpla la funcionalidad, por ejemplo, este es el estilo que utiliza google Chrome.
import './TresRaya.css'
import { changeTurn } from './changeTurn'
import { didIWin } from './didIWin'
import { paintScore } from './paintScore'
import { pintarTresRaya } from './pintarTresRaya'

export const TresRaya = () => {
  var xWins = Number(localStorage.getItem('xWins')) || 0
  var oWins = Number(localStorage.getItem('oWins')) || 0
  var ties = Number(localStorage.getItem('ties')) || 0
  localStorage.setItem('lastPage', 'TresRaya')
  history.pushState('', '', '?page=TresRaya')
  var currentPlayer = ''
  const maxTurns = 9
  let turn = 0
  const gameElement = document.createElement('section')
  currentPlayer = pintarTresRaya(gameElement, currentPlayer)
  //? Intenté tener esto dentro de pintarTresRaya pero funcionaban a destiempo
  const oStart = document.getElementById('btnO')
  oStart.addEventListener('click', function () {
    currentPlayer = 'O'
    console.log('He elegido pintar ' + currentPlayer)
    const formElement = document.getElementById('xoForm')
    formElement.remove()
  })
  const xStart = document.getElementById('btnX')
  xStart.addEventListener('click', function () {
    currentPlayer = 'X'
    console.log('He elegido pintar ' + currentPlayer)
    const formElement = document.getElementById('xoForm')
    formElement.remove()
  })

  for (let index = 0; index < maxTurns; index++) {
    const XOElement = document.createElement('div')
    XOElement.classList.add(
      'yellow',
      'tickSize',
      'largeFont',
      'flex-container',
      'row'
    )
    const pElement = document.createElement('p')
    pElement.textContent = ''
    XOElement.id = index

    gameElement.appendChild(XOElement)
    XOElement.appendChild(pElement)
    var didIFinish = false
    XOElement.addEventListener('click', () => {
      // const collectionOfCells = gameElement.getElementsByTagName('div')
      // //debe de ser 9 elements
      // console.log(collectionOfCells)
      // console.log(
      //   `En la posicion 1 hay un: ${collectionOfCells[1].firstElementChild.innerText}`
      // )
      if (currentPlayer === 'O' || currentPlayer === 'X') {
        if (pElement.textContent === '') {
          turn += 1
          console.log('Esto es el turno ' + turn)

          if (turn > 4) {
            console.log(didIFinish)
            console.log(turn)
            window.requestAnimationFrame(() => {
              didIWin(turn, oWins, xWins, ties, currentPlayer, gameElement)
            })
          }
          pElement.textContent = currentPlayer
          console.log('acabo de colocar una ' + pElement.textContent)
          currentPlayer = changeTurn(currentPlayer)
        }
      }
    })
  }
  paintScore(xWins, ties, oWins)
}
