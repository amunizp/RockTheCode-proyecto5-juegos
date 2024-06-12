import { Card } from '../../components/Card/Card'
import { arrayEnlaces } from '../../Data/enlaces'

export const Elige = () => {
  const divApp = document.querySelector('main')
  localStorage.setItem('lastPage', 'Elige')
  history.pushState('', '', '?page=Elige')
  divApp.innerHTML = ''
  const headingelement = document.createElement('h2')
  headingelement.textContent = 'Elige un Juego'
  divApp.appendChild(headingelement)
  const sectionElement = document.createElement('section')
  sectionElement.classList.add('flex-container', 'row')
  divApp.appendChild(sectionElement)
  arrayEnlaces.map((enlace) => {
    if (enlace.texto !== 'Elige un Juego') {
      const aElement = document.createElement('a')
      sectionElement.appendChild(aElement)
      console.log('estoy aqui')
      aElement.addEventListener('click', enlace.page)
      Card(aElement, enlace.imagen, enlace.texto, enlace.description)
    }
  })
}
