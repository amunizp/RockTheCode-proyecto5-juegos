import './footer.css'

export function footer(app) {
  const footer = document.createElement('footer')
  app.appendChild(footer)
  const footerHeading = document.createElement('h3')
  footerHeading.textContent = '@amunizp'
  footer.appendChild(footerHeading)
  const footerContent = document.createElement('p')
  let today = new Date().toISOString().slice(0, 10)
  footerContent.textContent = `${today} `
  footer.appendChild(footerContent)
  const licence = document.createElement('div')
  licence.innerHTML = `<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/amunizp/RockTheCode-proyecto5-juegos/tree/67cc400698f291a45d3db24e8416857585c7c1b8">Rincon de Juegos</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://gitlab.com/amunizp">@amunizp</a> is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a></p>  `
  footer.appendChild(licence)
  const pFoot = document.createElement('p')
  const githubLink = document.createElement('a')
  githubLink.href =
    'https://github.com/amunizp/RockTheCode-proyecto5-juegos/tree/67cc400698f291a45d3db24e8416857585c7c1b8'
  githubLink.textContent = 'Codigo libre en GitHub'
  footer.appendChild(pFoot)
  pFoot.appendChild(githubLink)
  const tickArribution = document.createElement('p')
  tickArribution.innerHTML = `<a href="https://www.flaticon.com/free-icons/tick-tack-toe" title="tick tack toe icons">Tick tack toe icons created by edt.im - Flaticon</a>`
  pFoot.appendChild(tickArribution)
  const memoryArribution = document.createElement('p')
  memoryArribution.innerHTML = `<a href="https://www.flaticon.com/free-icons/photo" title="photo icons">Photo icons created by Freepik - Flaticon</a>`
  pFoot.appendChild(memoryArribution)
  const supriseArribution = document.createElement('p')
  supriseArribution.innerHTML = `<a href="https://www.flaticon.com/free-icons/mystery-box" title="mystery box icons">Mystery box icons created by artcus - Flaticon</a>`
  pFoot.appendChild(supriseArribution)
  const emmaArribution = document.createElement('p')
  emmaArribution.innerHTML = `CSS layout design and other drawings done by Emma Scott, thank you Emma!`
  pFoot.appendChild(emmaArribution)
}
