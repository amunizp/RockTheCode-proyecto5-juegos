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
  //debe de ser 9 elements
  console.log(collectionOfCells)
  const allEqualX = (arr) => arr.every((v) => v === 'X')
  const allEqualO = (arr) => arr.every((v) => v === 'O')
  var didIFinish
  //const allEqual = (arr) => arr.every((v) => v === currentPlayer)
  window.requestAnimationFrame(() => {
    var lineasPuestas = []
    for (const element of collectionOfCells) {
      lineasPuestas.push(element.firstElementChild.innerText)
    }
    console.log(lineasPuestas)

    winningConditions.forEach((win) => {
      var lineaPuesta = []
      win.forEach((element) => {
        lineaPuesta.push(lineasPuestas[element])
      })
      console.log(lineaPuesta)
      if (allEqualX(lineaPuesta)) {
        console.log('linea! de X')
        xWins += 1
        console.log('Total X wins' + xWins)
        localStorage.setItem('xWins', xWins)
        turn = 0
        didIFinish = `${currentPlayer} pierde.`

        alert('Se acabó esta partida. Empieza de nuevo. ' + didIFinish)
        currentPlayer = ''
        didIFinish = false

        return TresRaya()
      } else if (allEqualO(lineaPuesta)) {
        console.log('linea! de O')
        oWins += 1
        console.log('Total O wins' + oWins)
        localStorage.setItem('oWins', oWins)
        turn = 0
        didIFinish = `${currentPlayer} pierde.`
        alert('Se acabó esta partida. Empieza de nuevo. ' + didIFinish)
        didIFinish = false
        currentPlayer = ''

        return TresRaya()
      } else if (turn > 8) {
        console.log('empate')
        currentPlayer = ''
        turn = 0
        console.log('empates antes de sumar uno ' + ties)
        ties += 1
        console.log('numero de Empates ' + ties)
        localStorage.setItem('ties', ties)
        //alert('Empate, se resetea')
        didIFinish = `Empate`
        alert('Se acabó esta partida. Empieza de nuevo. ' + didIFinish)
        didIFinish = false

        return TresRaya() //turn, currentPlayer, ties,
      } else {
        console.log('No gané y no empaté Comprobe si gané en el turno: ' + turn)
        didIFinish = 'Siguiente Turno'
      }
    })
  })
  return didIFinish
}
