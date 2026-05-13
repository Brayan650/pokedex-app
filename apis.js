const Input =  document.getElementById("entradapokemon");
const BotonBuscar = document.getElementById("boton_buscar");
const BotonRandom = document.getElementById("boton_random");
const result = document.getElementById("result");

BotonBuscar.addEventListener("click",() => {
    const nombre = Input.value.toLowerCase();
    fetchpokemon(nombre);
});

BotonRandom.addEventListener("click",() => {
    const random = Math.floor(Math.random() * 150) + 1;
    fetchpokemon(random);
});

async function fetchpokemon (param) {
    try { 

        const dato = await fetch (`https://pokeapi.co/api/v2/pokemon/${param}`);
        const des = await dato.json();
        result.innerHTML =  `<h2>${des.name}</h2>
                            <img src="${des.sprites.front_default}">
                            <p>ID: ${des.id}</p>`;

    } catch (error) {
        result.innerHTML = '<p>"Pokemon no encontrado"</p>';
        console.log("error");
    }
}