

 const typeColor = {
   
    bug:"#26de81",
    dragon:"#ffeaa7",
    electric:"#fed330",
    fairy:"#FF0069",
    fighting:"#30336b",
    fire:"#fo932b",
    flying:"#81ecec",
    grass:"#00b894",
    ground:"#EFb549",
    ghost:"#a5eea",
    ice:"#74b9ff",
    normal:"#95afc0",
    poison:"#6c5ce7",
    psychic:"#a29bfe",
    rock:"#2d23436",
    water:"#0190FF",
 };


const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

// Placeholder for generateCard function
// function generateCard(data) {
  
    
// }

let getPokeData = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    console.log(id);
    const finalurl = url + id;
    // console.log(finalurl);
    fetch(finalurl)
        .then((response) => response.json())
        .then((data) => {
            generateCard(data);
            console.log(data);
        });
}

let generateCard =(data) =>{
    console.log(data);
    const hp = data.stats[0].base_stat;
    const imgScr = data.sprites.other.dream_world.front_default;
    const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
    const statAttack = data.stats[1].base_stat;
    const statDefence = data.stats[2].base_stat;
    const statspeed = data.stats[5].base_stat;

    const themeColor = typeColor[data.types[0].type.name];
    console.log(themeColor);

    card.innerHTML = `
    <p class="hp">
    <span>HP</span>
     ${hp}
    </p>
    <img src=${imgScr} >
    <h2 class="poke-name">${pokeName}</h2>
    <div class="types">
    
    </div>
    <div class="stats">
        <div>
            <h3>${statAttack}</h3>
            <p>Attack</p>
        </div>
        <div>
            <h3>${statDefence}</h3>
            <p>Defence</p>
        </div>
        <div>
            <h3>${statspeed}</h3>
            <p>Speed</p>
        </div>
    </div>
   
    
    `;
    appendTypes(data.types);
    styleCard(themeColor);
};
let appendTypes = (types) => {
    types.forEach((item) => {
      console.log(item); // Log each individual type
      let span = document.createElement("span");
      span.textContent = item.type.name;
      document.querySelector(".types").appendChild(span);
    });
  };

let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
    card.querySelectorAll(".types span").forEach((typeColor)=>{
        typeColor.style.backgroundColor = color;
    })
}



btn.addEventListener("click", getPokeData);
window.addEventListener("load",getPokeData);










