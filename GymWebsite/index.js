const header = document.querySelector('header')
window.addEventListener('scroll' , (e)=>{
    header.classList.toggle('active' , window.scrollY > 0)
})

const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click',(e)=>{
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')

})
