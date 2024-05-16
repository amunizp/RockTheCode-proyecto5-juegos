let childrenElements = []
export function selectElement(cardA0) {
  // console.log('toque')
  // console.log(cardA0.querySelector('img'))
  var triplete = Number(localStorage.getItem('triplete')) || 0
  const selected = document.getElementById('selected')
  let cardA0Cloned = cardA0.cloneNode(true)
  console.log(cardA0Cloned.querySelector('img'))
  selected.appendChild(cardA0Cloned)
  cardA0Cloned.style.display = 'block'
  cardA0Cloned.className = 'selected'
  var numberOfChildren = selected.childElementCount
  // const allEqual = (arr) => arr.every((v) => v === arr[0])
  const allEqual = (arr) => {
    const firstElement = arr[0]
    return arr.every((v) => v === firstElement)
  }

  //var childrenElements = [...selected.children]
  childrenElements.push(cardA0Cloned.querySelector('img').outerHTML)
  console.log(childrenElements)
  console.log(allEqual(childrenElements))
  console.log(childrenElements[0] === childrenElements[1])
  const publicaPuntos = document.getElementById('puntos')
  const articleElement = document.querySelector('article')
  articleElement.appendChild(publicaPuntos)
  if (numberOfChildren > 2) {
    if (allEqual(childrenElements)) {
      console.log('all the same')
      triplete++
      localStorage.setItem('triplete', triplete)
      alert('Enhorabuena! Han incrementado tus puntos!')
      publicaPuntos.innerHTML = `Puntuación acumulada: ${
        localStorage.getItem('triplete') || '0'
      } `
      selected.innerHTML = ''
      childrenElements = []
    } else {
      console.log('some are different Start again')
      alert('No son iguales prueba otra vez!')
      selected.innerHTML = ''
      childrenElements = []
    }
  }
  console.log(numberOfChildren)
  console.log(selected.children)
}
