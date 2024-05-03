const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
import { TresRaya } from './TresRaya'
export const didIWin = (
  turn,
  oWins,
  xWins,
  ties,
  currentPlayer,
  gameElement
) => {
  const collectionOfCells = gameElement.getElementsByTagName('div')

  winningConditions.forEach((win) => {
    var newArray = []

    win.forEach((element) => {
      newArray.push(collectionOfCells[element].firstElementChild.innerText)
    })
    //https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal
    const allEqualX = (arr) => arr.every((v) => v === 'X')
    if (
      (collectionOfCells[win[0]].firstElementChild.innerText === 'O') &
      (collectionOfCells[win[1]].firstElementChild.innerText === 'O') &
      (collectionOfCells[win[2]].firstElementChild.innerText === 'O')
    ) {
      alert('O ha ganado, se resetea')
      console.log('O ha ganador')
      currentPlayer = ''
      console.log('Total O wins ' + oWins)
      oWins += 1
      localStorage.setItem('oWins', oWins)
      console.log('Total O wins ' + oWins)
      return currentPlayer, oWins, TresRaya()
    } else if (allEqualX(newArray)) {
      //TODO enseñar como ganó el ultimo jugador
      alert('X ha ganado, se resetea')
      console.log('X ha ganado')
      currentPlayer = ''
      console.log('Total X wins' + xWins)
      xWins += 1
      console.log('Total X wins' + xWins)
      localStorage.setItem('xWins', xWins)

      return currentPlayer, xWins, TresRaya()
    } else if (turn > 8) {
      //TODO Socorro! no se como salir de el array!
      console.log('empate')
      currentPlayer = ''
      turn = 0
      console.log('empates antes de sumar uno ' + ties)
      ties += 1
      console.log('numero de Empates ' + ties)
      localStorage.setItem('ties', ties)
      alert('Empate, se resetea')
      return turn, currentPlayer, ties, TresRaya()
    }

    console.log('es el turno numero: ' + turn)
  })
}
