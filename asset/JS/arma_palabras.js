//Palabras del juego
let baseDatos = new Array(4);
baseDatos[0] = ["PERA", "BANANA", "MANZANA", "SANDIA", "MANDARINA", "NARANJA", "KIWI"];
baseDatos[1] = ["PIANO", "GUITARRA", "VIOLIN", "BAJO", "TROMPETA", "SAXOFON", "BATERIA"];
baseDatos[2] = ["LEON", "GALLINA", "PERRO", "GATO", "LEOPARDO", "MURCIELAGO", "MONO", "ELEFANTE"];
baseDatos[3] = ["PERU", "ARGENTINA", "URUGUAY", "COLOMBIA", "ECUADOR", "CHILE", "VENEZUELA", "BRASIL"];

//CATEGORIAS
let categorias = ["FRUTAS", "MUSICA", "ANIMALES", "PAISES"];
//cantidad de palabras con las que se jugará en cada categoría
const cantidadPalabras = 5;
//arreglo para guardar las 5 palabras que juegan
let palabras = [];
//este arreglo guarda las palabras desordenadas
let desordenadas = [];
//se mantiene el nivel 
let pos = 0;

swal("Recuerda que debes poner mayúsculas para jugar", `Muchas suerte!`);

//tomo una categoría y selecciono 5 palabras para jugar 
function agregarPalabra(categoria){
    for(i = 0; i < cantidadPalabras; i++){
        let x = Math.floor(Math.random()*categoria.length);
        palabras.push(categoria[x]);
        //elimino del arreglo categoría para que la próxima no pueda elegir esta palabra
        categoria.splice(x, 1);
    }
}
//la primera cez le envío la categoría FRUTAS
agregarPalabra(baseDatos[pos]);

//Desordeno las palabras 
function desordenarPalabras(){
    for(i = 0; i < palabras.length; i++){
        //convertir a array
        let palabra = palabras[i];
        palabra = palabra.split("");
        let palabraDesordenada;
        palabraDesordenada = palabra.sort(function(){return Math.random() - .5 });
        //convertir el arreglo a string
        palabraDesordenada = palabraDesordenada.toString();
        //quitamos las comas
        palabraDesordenada = palabraDesordenada.replace(/,/g,"");
        //controlamos que la palabra este desordenada y no sea igual a la ordenada (vaya infeliz jajajaja)
        if(palabraDesordenada === palabras[i]){
            i = i - 1;
        }else{
            //guardamos la palabra desordenada con verificación
            desordenadas.push(palabraDesordenada);
        }
    }
}

//agregar la palabra y el input (las 5)
function agregarPalabras(){
    //titulo
    let h2 = document.createElement("h2");
    h2.textContent = categorias[pos];
    document.querySelector("#contenedor").appendChild(h2);
    for(var i = 0; i < desordenadas.length; i++){
        let div = document.createElement("div");
        div.className = "fila";
        let palabra = document.createElement("div");
        palabra.textContent = desordenadas[i];
        palabra.className = "palabra";
        div.appendChild(palabra);
        let input = document.createElement("input");
        input.id = i;
        //al input le agregamos el evento onkeyup para detectar cuándo se presiona una tecla.
        input.setAttribute("onkeyup", "corregir("+i+")");
        div.appendChild(input);
        document.querySelector("#contenedor").appendChild(div);
    }
}

desordenarPalabras();
agregarPalabras();

//Corregir
function corregir(i){
    p = document.getElementById(i).value;
    //si no ingreso nada salgo
    if(p == ""){
        return
    }
    //caso correcto
    if(p == palabras[i]){
        document.getElementById(i).className = "correcta";
        //control si terminó
        controlFin();
    }else{
        document.getElementById(i).className = "";
    }
}

let btnCreado = false;

function controlFin(){
    //obtengo la cantidad de clases "correcta" para saber si terminó
    let total = document.getElementsByClassName("correcta").length;

    if(total == cantidadPalabras && btnCreado == false){
        let button = document.createElement("button");
        button.textContent = "Siguiente";
        button.setAttribute("onclick", "siguiente()");
        document.querySelector("#contenedor").appendChild(button);
        btnCreado = true;
        //desbloqueamos el siguiente nivel
        let niveles = document.getElementsByClassName("nivel");
        niveles[pos].classList = "nivel completado";
    } 
}

function siguiente(){
    //así limpio el arreglo palabras y desordenadas para cargarlo cocn las nuevas palabras
    palabras.length = 0;
    desordenadas.length = 0;
    document.querySelector("#contenedor").textContent = "";
    pos++;
    //controlo si se temino el juego 
    if(pos < baseDatos.length){
        //no terminó 
        btnCreado = false;
        agregarPalabra(baseDatos[pos]);
        desordenarPalabras();
        agregarPalabras();
    }else{
        let h3 = document.createElement("h3");
        h3.textContent = "¡JUEGO FINALIZADO!";
        //En este caso voy a dejar la otra forma porque me gusta como se ve el movimiento
        swal("¡¡¡FELICITACIONES!!!", `GRAN TRABAJO`);
        document.querySelector("#contenedor").appendChild(h3);
        let h3b = document.createElement("h3");
        h3b.textContent = "¡MUY BIEN!";
        document.querySelector("#contenedor").appendChild(h3b);
        let reinicio = document.createElement("button");
        reinicio.textContent = "Volver a jugar";
        reinicio.setAttribute("onclick", "location.reload()");
        document.querySelector("#contenedor").appendChild(reinicio);
    }
}
