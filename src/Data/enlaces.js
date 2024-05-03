import { Elige } from '../Pages/Elige/Elige'
import { Mateo } from '../Pages/Mateo/Mateo'
import { Memoria } from '../Pages/Memoria/Memoria'
import { TresRaya } from '../Pages/TresRaya/TresRaya'

export const arrayEnlaces = [
  {
    url: '#',
    imagen: '../../images/gears.png',
    texto: 'Elige un Juego',
    description: 'Elige el juego que te apetezca.',
    page: Elige
  },
  {
    url: '#',
    imagen: '../../images/tick-tack-toe.png',
    texto: 'Tres en Raya',
    description: 'El tres en raya de siempre. Busca a un amigo para jugar',
    page: TresRaya
  },
  {
    url: '#',
    imagen: '../../images/photos.png',
    texto: 'Memoria',
    description: 'Busca las parejas.',
    page: Memoria
  },
  {
    url: '#',
    imagen: '../../images/question.png',
    texto: 'El Juego de Mateo',
    description:
      'Coordina para que te toquen tres iguales. Acumula premios! Comprara puntos de esta session con los puntos máximos de sessiones anteriores!',
    page: Mateo
  }
]
