   const card =[...document.querySelectorAll('.card')]
   console.log(card)

   card[0].addEventListener('click',(evt)=>{
    const win=window.open('https://github.com/Paulovct/Panda-Calc' ,'_blank')
    win.focus()
   })