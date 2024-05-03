export const changeTurn = (currentPlayer) => {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
    console.log('el turno es de ' + currentPlayer)
    return currentPlayer
  } else {
    currentPlayer = 'X'
    console.log('el turno es de ' + currentPlayer)
    return currentPlayer
  }
}
