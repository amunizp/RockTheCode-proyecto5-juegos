import { arrayEnlaces } from '../../Data/enlaces'
import { Elige } from '../../Pages/Elige/Elige'
import './Header.css'
export function Header(app) {
  const headerElement = document.createElement('header')

  headerElement.classList.add('flex-container', 'row')
  const nameElement = document.createElement('h1')
  const aHeader = document.createElement('a')
  aHeader.appendChild(nameElement)
  headerElement.appendChild(aHeader)
  aHeader.addEventListener('click', Elige)
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
    aElement.addEventListener("click", (e) =>{
      e.preventDefault();
      history.pushState('', '', enlaces.url)
      enlaces.page()
    })
  })

  return app.appendChild(headerElement)
}
