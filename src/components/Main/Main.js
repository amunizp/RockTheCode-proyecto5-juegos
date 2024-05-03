import { Elige } from '../../Pages/Elige/Elige'
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
  }
}
