const prevBtn = document.querySelector('.arrow_left')
const nextBtn = document.querySelector('.arrow_right')
const quote1 = document.querySelector('.quote1')
const portrait1 = document.querySelector('.portrait1')
const quote2 = document.querySelector('.quote2')
const portrait2 = document.querySelector('.portrait2')


prevBtn.addEventListener("click", ()=>{
    console.log('click')
    quote1.classList.toggle("active")
    portrait1.classList.toggle("active")
    quote2.classList.toggle("active")
    portrait2.classList.toggle("active")
})

nextBtn.addEventListener("click", ()=>{
    console.log('click')
    quote1.classList.toggle("active")
    portrait1.classList.toggle("active")
    quote2.classList.toggle("active")
    portrait2.classList.toggle("active")
})