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
const address = window.location.href
console.log(address)
var page = address
  .substring(address.lastIndexOf('=') + 1)
  .split('#')
  .shift()
localStorage.setItem('lastPage', page)
// addEventListener('popstate', () => {
//   location.reload()
// })
onhashchange = (event) => {
  location.reload()
}
render()

// addAboutListeners()
// addMainListeners()
