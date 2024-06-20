import './style.css'
import { Header } from './src/components/Header/Header'
import { footer } from './src/components/footer/footer'
import { Main } from './src/components/Main/Main'
// import Footer from './components/Footer/Footer'
// import { Main, addMainListeners } from './components/Main/Main'
// import { addAboutListeners } from './components/AboutMe/AboutMe'

const render = () => {
  const app = document.querySelector('#app')
  Header(app)
  Main(app)

  footer(app)
}
// ${Main()}
// ${Footer()}
var address = new URL(window.location.href)
console.log(address)
var page = localStorage.getItem('lastPage')|| 'Elige'

console.log(page)
localStorage.setItem('lastPage', page)
addEventListener('popstate', () => {
  address = new URL(window.location.href)
  var page = address.pathname.substring(1) || 'Elige'
  localStorage.setItem('lastPage', page)
  Main(app)
  console.log('cargue el Main despues de popState')
})
// onhashchange = (event) => {
//   location.reload()
// }
render()


