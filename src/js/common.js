// --- autoTypedText Method ONE Start---//

const textEl = document.getElementById('type-writer')
const text = 'Experience a Premium Banking Service with HSBC'

let idx = 1
let speed = 300

export function typeWrite() {
  textEl.innerText = text.slice(0, idx)

  idx++

  if (idx > text.length) {
    idx = 1
  }

  setTimeout(typeWrite, speed)
}

const navbar = document.getElementById('navbar')
export const scrollContainer = document.getElementById('main')
export function changeNavBg() {
  const scrollValue = scrollContainer.scrollTop
  if (scrollValue < 50) {
    navbar.classList.remove('nav-bg')
  } else {
    navbar.classList.add('nav-bg')
  }
  console.log(scrollValue)
  console.log('1')
}

const productContainers = [...document.querySelectorAll('.product-container')]
const nxtBtn = [...document.querySelectorAll('.nxt-btn')]
const preBtn = [...document.querySelectorAll('.pre-btn')]

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect()
  let containerWidth = containerDimensions.width

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth
  })
})

// export default autoWriteText
// --- autoTypedText Method ONE Close--//

// --- autoTypedText Method TWO Start---//

// --- autoTypedText Method TWO Close---//

// // --- Navbar Bg Changing Start---//

// // --- Navbar Bg Changing Close--//

const panels = document.querySelectorAll('.categories-panel')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

export function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}
