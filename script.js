const btnToggle=document.getElementById("toggle")
const navBar=document.getElementById("nav")
const container=document.querySelector("contaner elements")



container.addEventListener("click",(evt)=>{
    
        navBar.classList.remove("on")
    
})

btnToggle.addEventListener("click", (evt)=>{    
    navBar.classList.toggle("on")
})