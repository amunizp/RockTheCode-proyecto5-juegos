export const paintScore = (xWins, ties, oWins) => {
  const divApp = document.querySelector('main')
  const scoreSection = document.createElement('section')
  scoreSection.id = 'scoreElem'
  divApp.appendChild(scoreSection)
  scoreSection.classList.add('flex-container', 'row')
  const pXWins = document.createElement('p')
  pXWins.textContent = `X has won ${xWins} times`
  const pTies = document.createElement('p')
  pTies.textContent = `There has been ${ties} ties`
  const pOWins = document.createElement('p')
  pOWins.textContent = `O has won ${oWins} times`
  scoreSection.appendChild(pXWins)
  scoreSection.appendChild(pTies)
  scoreSection.appendChild(pOWins)
}
