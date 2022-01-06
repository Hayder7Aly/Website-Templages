// 1.  navigation and toggle functionality 

const toggle = document.querySelector('.toggle')
const header = document.querySelector('.header')
toggle.addEventListener('click',(e)=>{
    header.classList.toggle('active')
})

window.addEventListener('click' , (e)=>{
    if(e.target !== header && e.target !== toggle){
        header.classList.remove('active')
    }
})

