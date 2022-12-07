import './index.css'
import { typeWrite, changeNavBg, navbar, scrollContainer } from './src/js/common.js'

window.addEventListener('load', typeWrite)
// navbar.addEventListener('scroll', changeNavBg)
scrollContainer.addEventListener('scroll', changeNavBg)
// window.addEventListener('scroll', changeNavBg)
