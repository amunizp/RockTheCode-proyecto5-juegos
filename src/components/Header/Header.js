import { arrayEnlaces } from '../../Data/enlaces'
import './Header.css'
export function Header(app) {
  const headerElement = document.createElement('header')

  headerElement.classList.add('flex-container', 'row')
  const nameElement = document.createElement('h1')
  headerElement.appendChild(nameElement)
  nameElement.textContent = 'Rincón de Juegos'
  const navElement = document.createElement('nav')
  headerElement.appendChild(navElement)
  const ulElement = document.createElement('ul')
  navElement.appendChild(ulElement)
  ulElement.classList.add('flex-container', 'row')
  arrayEnlaces.forEach((enlaces) => {
    const liElement = document.createElement('li')
    ulElement.appendChild(liElement)
    const aElement = document.createElement('a')
    aElement.href = enlaces.url
    aElement.textContent = enlaces.texto
    aElement.addEventListener('click', enlaces.page)
    liElement.appendChild(aElement)
  })

  return app.appendChild(headerElement)
}
