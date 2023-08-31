
let h1 = document.createElement("h1");
h1.innerHTML = `Todos los personajes de Rick and Morty`;
document.body.append(h1);

const rickAndMorty = async() => {
    try{
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        const personajes = data.results; 
        console.log(data);

        personajes.forEach((personaje) => {
            let div = document.createElement("div");

            div.innerHTML = `
                <h2> Nombre </h2>
                <h3> ${personaje.name}</h3>
                <p> Estado: <b> ${personaje.status} </b> </p>
                <p> Género: <b> ${personaje.gender} </b> </p>
                <img src="${personaje.image}">
            `;
        // let contenedor = document.getElementsByTagName("contenedor");
        document.body.append(div);
    });

    } catch (error){
        console.log("error");
    }
};

rickAndMorty();

