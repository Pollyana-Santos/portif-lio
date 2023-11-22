const horas=document.getElementById("horas");
const minutos=document.getElementById("minutos");
const segundos=document.getElementById("segundos");
const relogio=setInterval(()=>{
    let datetoday=new Date();
    
    let hr=datetoday.getHours();
    horas.textContent=hr;
    
    
    let mn=datetoday.getMinutes();
    minutos.textContent=mn=mn<=9?'0'+mn:mn
    

    let sg=datetoday.getSeconds();
    segundos.textContent=sg=sg<=9?'0'+sg:sg
    


});



