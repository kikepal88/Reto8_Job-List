// mainFilterContainer trae el contenedor de los filtros
const mainFilterContainer = document.getElementById('main__filter-container')

// filters crear un array con todos las etiquetas que tengan el class 'filter', que son los articles de cada filtro en el contenedor de filtros.
const filters = Array.from(document.getElementsByClassName('filter'))

// crear un nuevo array con todos las etiquetas que tengan el class 'keyword', dentro de Filters, que son los div de cada filtro en el contenedor de filtros, estos tienen un data-key con el nombre de cada tecnología.
const keywords = filters.map(val => {
  return val.querySelector('.keyword')
})

// crear un array con todos las etiquetas que tengan el class 'job_card', que son los articles de cada trabajo en el contenedor de cards.
const jobCards = Array.from(document.getElementsByClassName('job__card'))

// es un array vacío el cual va contener strings con los nombre de las tecnologías que entran al filtro.
let activeKeys = [];

// Esta es la función que se activa cuando se hace click en cada tecnologia de los cards o los filtros
function keywordClicked() {
  const  attributeKey = event.currentTarget.getAttribute("data-key")
  console.log('Tecnologia seleccionada', attributeKey)
  const mapKeywords = keywords.map( (val, index) => {
    const keywordVal = val.getAttribute("data-key")
    // Otra forma de hacer un if con &&
    attributeKey === keywordVal && filters[index].classList.toggle('show')
    toggleElementInArray(activeKeys, attributeKey)
  })
  console.log('mapKeywords', mapKeywords)
  console.log('Tecnologias filtradas', activeKeys)
  activeKeys.length !== 0 ? mainFilterContainer.classList.add('show') : mainFilterContainer.classList.remove('show')
  togglejobCard(activeKeys)
}

function clearFilter() {
  activeKeys = []
  togglejobCard(activeKeys)
  filters.map( (val) => {
    val.classList.remove('show')
  })
  mainFilterContainer.classList.remove('show')
}

function togglejobCard(keywords) {
  const jobsCard = jobCards.map( (val, jobIndex) => {
    const jobCard = Array.from(val.querySelectorAll('.card__keyword'))
    const jobKeys = jobCard.map( card => {
      return card.getAttribute("data-key")
    })
    let keywordsInProject = 0
    validateKeywords = keywords.map( keyword => {
      jobKeys.indexOf(keyword) > -1 && keywordsInProject++
    })
    console.log(keywordsInProject)
    keywordsInProject === activeKeys.length ? val.classList.remove('hidden') : val.classList.add('hidden')
  })
}

function toggleElementInArray(array, elem) {
  const index = array.indexOf(elem);
  if (index > -1) {
      array.splice(index, 1);
  } else {
    array.push(elem)
  }
}
