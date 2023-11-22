const form=document.getElementById('form');

form.addEventListener('submit',function(event){
    // previne o comportamento padrão do evento submit do js,ou seja,impede o recarregamento da pagina 
     event.preventDefault();

    const peso=document.getElementById("weight").value;

    const altura=document.getElementById("height").value;

    const imc=peso/(altura*altura)

    document.getElementById("infos").classList.remove("hidden");

    // condições do imc
    const campoImc=document.getElementById("value");//aonde aparece o imc

    let descricao;

    // campoImc.classList.add("attention");

    campoImc.style.color="red";

    if (imc<18.5) {
        descricao="cuidado!está abaixo do peso."   
    } 
    else if((imc >=18.5)&&(imc<=25)){
        descricao="seu peso é ideal."
        campoImc.style.color="green";
    }
    else if((imc >25)&&(imc <=30)){
        descricao="cuidado!está com sobrepeso"
    }

    else if((imc >30)&&(imc <30)){
        descricao="cuidado voce está com obesidade moderada"
    }
    else if((imc >35)&&(imc<40)){
        descricao="cuidado!voce está com obesidade severa"            
    }
else{ 
    descricao="cuidado!você está com obesidade morbida"   
}
    

  campoImc.textContent=imc;

  document.getElementById("description").textContent=descricao
} );
