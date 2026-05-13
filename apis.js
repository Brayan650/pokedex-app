const entrada =  document.getElementById("entradapokemon");
const BotonBuscar = document.getElementById("boton_buscar");
const BotonRandom = document.getElementById("boton_random");

BotonBuscar.addEventListener("click",() => {
    const nombre = Input.value.toLowerCase();
    apipokemon(nombre);
});

BotonRandom.addEventListener("click",() => {
    const random = Math.floor(Math.random() * 150) + 1;
    apipokemon(random);
});

async function apipokemon (param) {
    try { 

        const dato = await fetch ('https://pokeapi.co/api/v2/pokemon/ditto/${param}');
        const des = await dato.json();
        document.getElementById("resultados").innerHTML = '<h2>${des.nombre}</h2> <h2>${des.random}</h2>';

    } catch (error) {
        resultados.innerHTML = '<p>"Pokemon no encontrado"</p>';
        console.log("error");
    }
}