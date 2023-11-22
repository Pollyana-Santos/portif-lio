const visor=document.getElementById("resultado");

function insert(num){
    visor.innerHTML+=num;

}
function clean( ){
    visor.innerHTML=''
}

function back(){
    let resultado=visor.innerHTML;
    visor.innerHTML=resultado.substring(0,resultado.length-1);
}

function calcular(){
    let resultado=visor.innerHTML;
    


    if(resultado.length >2){
        visor.innerHTML=eval(resultado)
        // document.getElementById("resultado").innerHTML= visor
    }
    else{
        document.getElementById("resultado").textContent='resultado incorreto!!!'
    }
    
    
    


}

    

