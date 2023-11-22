// variáveis globais.
const pokemonName=document.querySelector(".pokemon-name")
const pokemonNumber=document.querySelector(".pokemon-number")
const pokemonImagem=document.querySelector(".pokemon-image")
const buttonprev=document.querySelector(".btn-prev")
const buttonbtn=document.querySelector(".btn-next")
let searchPokemon=0;


// conectando a PokeApi//

const FetchPokemon=async(pokemon)=>{
    const Apiresponse= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    
    
    if (Apiresponse.status===200) {
        const data=await Apiresponse.json();
        return data;
        
    }
   
};

// rendenizar dados pokemon.

const renderPokemon=async(pokemon)=>{
    
    pokemonName.innerHTML="carregando..."
    pokemonNumber.innerHTML = ''
    
    
    const data= await FetchPokemon(pokemon);

    if (data) {
        pokemonName.innerHTML=data.name;
        pokemonNumber.innerHTML=data.id;
        pokemonImagem.src=data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

    input.value="";
    searchPokemon=data.id
        
    } 
    else {
        pokemonImagem.src=''
        pokemonName.innerHTML="não encontrado :("
        input.value=''

            
    }

      console.log(data)

}

// achar o pokemon pelo input.

const form=document.querySelector(".form");
const input=document.querySelector(".input-search");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    renderPokemon(input.value.toLowerCase())
    
});

// eventos dos botões prev e next

buttonprev.addEventListener("click",()=>{
    
   
    if (searchPokemon>1) {
        searchPokemon -=1
         renderPokemon(searchPokemon)
    }
    
    });
buttonbtn.addEventListener("click",()=>{
    searchPokemon +=1;
    renderPokemon(searchPokemon)
    
});







renderPokemon(172)






