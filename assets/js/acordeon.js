const acordeonTrigger=document.querySelectorAll(".acordeon .trigger")

acordeonTrigger.forEach((trigger)=>{
    trigger.addEventListener("click",()=>{
        trigger.parentElement.classList.toggle("open")
    })
})


