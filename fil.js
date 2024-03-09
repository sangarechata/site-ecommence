const incrementer = document.getElementById('incrementer')
const decrementer = document.getElementById('decrementer')
const result = document.getElementById('result')
const header = document.getElementById('scroll')
const button = document.getElementById('animation')
const min =document.querySelector('h1')
min.addEventListener('mousemove',()=>{
    min.style.color ='orange';
    min.style.textDecoration='underline'
})
min.addEventListener('mouseleave',()=>{
    min.style.color ='black';
    min.style.textDecoration='none'

})

button.addEventListener("mouseenter",(e)=>{
    button.classList.add("play-animation")
})

button.addEventListener("mouseleave", ()=>{
    button.classList.remove("play-animation")
})

window.addEventListener('scroll',()=>{
    if(window.scrollY>200){
        header.classList.add('active')
    }
    else{
    }
})
scroll.textContent=scrollX

incrementer.addEventListener('click', ()=> {
    result.textContent = parseInt(result.textContent) + 1
})


decrementer.addEventListener('click', ()=> {
    result.textContent = parseInt(result.textContent) - 1
})



console.log(incrementer.innerText)