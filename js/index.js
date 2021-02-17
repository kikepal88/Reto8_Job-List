const mainFilterContainer = document.getElementById('main__filter-container')

const filters = Array.from(document.getElementsByClassName('filter'))
const keywords = filters.map(val => {
  return val.querySelector('.keyword')
})

const jobCards = Array.from(document.getElementsByClassName('job__card'))

let activeKeys = [];

function keywordClicked() {
  console.log(activeKeys)
  const  attributeKey = event.currentTarget.getAttribute("data-key")
  console.log(attributeKey)
  keywords.map( (val, index) => {
    const keywordVal = val.getAttribute("data-key")
    attributeKey === keywordVal && filters[index].classList.toggle('show')
    toggleElementInArray(activeKeys, attributeKey)
  })
  console.log(activeKeys)
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
