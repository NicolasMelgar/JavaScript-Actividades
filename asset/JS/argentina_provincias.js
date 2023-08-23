
import { provinciasZonas } from "./bd__Provincias__Zonas.js";

//console.log(provincias);
//console.log(provinciasZonas);

let patagonia = provinciasZonas.filter(provinciasZonas => provinciasZonas.zona === "Patagonia");
let cuyo = provinciasZonas.filter(provinciasZonas => provinciasZonas.zona === "Cuyo");
let noroeste = provinciasZonas.filter(provinciasZonas => provinciasZonas.zona === "Noroeste");
let pampeana = provinciasZonas.filter(provinciasZonas => provinciasZonas.zona === "Pampeana");
let centro = provinciasZonas.filter(provinciasZonas => provinciasZonas.zona === "Centro");
let noreste = provinciasZonas.filter(provinciasZonas => provinciasZonas.zona === "Noreste");

//Esto lo podría usar con un filter o algo así para filtrar por zona, población , etc
console.log(patagonia);
console.log(cuyo);
console.log(noroeste);
console.log(pampeana);
console.log(centro);
console.log(noreste);

let contenedor = document.getElementById("contenedor");

provinciasZonas.forEach((provinciasZonas) =>{
    const { nombre, capital, poblacion, zona, link, imagen} = provinciasZonas;
    let tarjeta = document.createElement("div");
    tarjeta.className = "provincia";
    tarjeta.innerHTML = `
    <div class="card">
    <img class="card-img-top" src="${imagen}" alt="Card image cap">
    <div class="card-body">
    <p class="card-title">${nombre}</p>
    <p class="card-text">Su capital es: ${capital}</p>
    <p class="card-text">Sus habitantes son: <b>${poblacion}</b></p>
    <p class="card-text">Forma parte de la zona: ${zona}</p>
    <a target="_blank" href="${link}"><button id="btn${nombre}" class="btn btn-primary">Saber más</button></a>
    </div>
    </div>`;
    contenedor.append(tarjeta);
}

)