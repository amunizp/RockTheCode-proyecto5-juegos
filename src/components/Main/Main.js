import { Elige } from '../../Pages/Elige/Elige'
import { Mateo } from '../../Pages/Mateo/Mateo'
import { Memoria } from '../../Pages/Memoria/Memoria'
import { TresRaya } from '../../Pages/TresRaya/TresRaya'
import './Main.css'

export function Main(app) {
  const mainElement = document.createElement('main')
  app.appendChild(mainElement)
  mainElement.classList.add(
    'flex-container',
    'column',
    'cuadricula',
    'bottomPadding'
  )

  var lastPage = localStorage.getItem('lastPage') || 'Elige'
  if (lastPage === 'Elige') {
    Elige()
  } else if (lastPage === 'TresRaya') {
    TresRaya()
  } else if (lastPage === 'Memoria') {
    Memoria()
  } else if (lastPage === 'Mateo') {
    Mateo()
  }
}
