import './Card.css'

// que necesitamos para crear elementos mediante createElement...
export const Card = (nodoPadre, url, titulo, texto, link) => {
  const cardHTML = document.createElement('figure')

  cardHTML.classList.add('card', 'flex-container', 'column')

  if (url) {
    const img = document.createElement('img')
    img.src = url
    img.alt = url
    cardHTML.appendChild(img)
  }
  const caption = document.createElement('figcaption')
  const title = document.createElement('h3')
  const p = document.createElement('p')

  title.textContent = titulo
  p.textContent = texto

  caption.appendChild(title)
  caption.appendChild(p)
  if (link) {
    const linkPElement = document.createElement('p')
    const linkAElement = document.createElement('a')
    linkAElement.href = link
    const shortURL = new URL(titulo, link)
    linkAElement.textContent = `${shortURL.hostname}` // in ${shortURL.pathname}`
    linkPElement.appendChild(linkAElement)
    caption.appendChild(linkPElement)
  }
  cardHTML.appendChild(caption)

  nodoPadre.appendChild(cardHTML)
}
