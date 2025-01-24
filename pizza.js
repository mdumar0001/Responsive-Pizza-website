// =============SHOW MENU========
const navMenu=document.getElementById('nav-menu')
let navToggle=document.getElementById('nav-toggle')
let navClose=document.getElementById('nav-close')

// menu show

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
// menu hidden
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

// ======REMOVE MENU MOBILE=======
const navLink=document.querySelectorAll('.nav__link')
const linkAction= ()=>{
    const navMenu=document.getElementById('nav-menu')
    //when we click on each nav__link ,we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

// =====ADD  SHADOW HEADER=======
const shadowHeader=()=>{
    const header=document.getElementById('header')
    //add a class if the buttton offset is greater then 50 of thev
    this.scrollY>=50 ? header.classList.add('shadow-header')
                       :header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)