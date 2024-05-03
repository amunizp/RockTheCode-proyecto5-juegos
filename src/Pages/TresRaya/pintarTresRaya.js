export const pintarTresRaya = (gameElement, currentPlayer) => {
  const divApp = document.querySelector('main')
  divApp.innerHTML = ''
  const headingelement = document.createElement('h2')
  headingelement.textContent = 'Tres en Raya'
  divApp.appendChild(headingelement)
  const formElement = document.createElement('form')
  formElement.id = 'xoForm'
  formElement.classList.add('flex-container', 'row')
  divApp.appendChild(formElement)
  const xStart = document.createElement('button')
  xStart.id = 'btnX'
  xStart.textContent = 'X Start'

  formElement.appendChild(xStart)
  const oStart = document.createElement('button')
  formElement.appendChild(oStart)
  oStart.id = 'btnO'
  oStart.textContent = 'O Start'

  gameElement.classList.add('grid', 'green')
  divApp.appendChild(gameElement)

  return currentPlayer
}
