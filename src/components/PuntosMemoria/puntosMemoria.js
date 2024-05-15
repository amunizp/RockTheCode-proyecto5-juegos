export function puntosMemoria(clicks, pairs) {
  console.log(`Clicks: ${clicks} y parejas ${pairs}`)

  var memClicks = Number(localStorage.getItem('memClicks')) || clicks
  //var memPairs = Number(localStorage.getItem('memPairs')) || pairs

  const pointSection = document.querySelector('#pointSection')
  pointSection.innerHTML = `<h3>Puntos</h3>
  <p id="currentPoints">Puntuación actual ${clicks} clicks y ${pairs} parejas</p>
  <p id="maxPoints">Puntuación máxima ${memClicks} clicks  para hacer 8 parejas</p>`
}
