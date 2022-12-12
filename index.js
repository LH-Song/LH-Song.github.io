import { typeWrite, changeNavBg, scrollContainer,removeActiveClasses } from './src/js/common.js'

window.addEventListener('load', typeWrite)
// navbar.addEventListener('scroll', changeNavBg)
// window.addEventListener('scroll', changeNavBg)
scrollContainer.addEventListener('scroll', changeNavBg)
// window.addEventListener('scroll', changeNavBg)
removeActiveClasses()