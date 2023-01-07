const btnToggle=document.getElementById("toggle")
const navBar=document.getElementById("nav")

btnToggle.addEventListener("click", (evt)=>{
    navBar.classList.toggle("on")
})