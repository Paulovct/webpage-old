   const card =[...document.querySelectorAll('.card')]
   console.log(card)

   card[0].addEventListener('click',(evt)=>{
    const win=window.open('https://github.com/Paulovct/Panda-Calc' ,'_blank')
    win.focus()
   })
   card[1].addEventListener('click',(evt)=>{
    const win=window.open('https://github.com/Paulovct/LoginPage---Darktheme' ,'_blank')
    win.focus()
   })
   card[2].addEventListener('click',(evt)=>{
    const win=window.open('https://github.com/Paulovct/Balls' ,'_blank')
    win.focus()
   })
   card[3].addEventListener('click',(evt)=>{
    const win=window.open('https://github.com/Paulovct/Card-simples.' ,'_blank')
    win.focus()
   })
   card[4].addEventListener('click',(evt)=>{
    const win=window.open('https://github.com/Paulovct/paulovct.github.io' ,'_blank')
    win.focus()
   })

   //final 5