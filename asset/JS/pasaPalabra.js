
//total de preguntas del juego 
//ojo que si pongo 20 acá tengo que modificar seno, coseno y circulo
const total__preguntas = 10;

//Tengo que poner todas las respuestas en mayúsculas porque configuré para toUpperCase
// const bd__juego = [
//     { 
//         id: "A",
//         pregunta: "Extremidad de un ave",
//         respuesta: "ALA"
//     },
//     { 
//         id: "B",
//         pregunta: "Animal parecido al caballo",
//         respuesta: "BURRO"
//     },
//     { 
//         id: 'C',
//         pregunta: "Ropa que se usa en el torso",
//         respuesta: "Camisa"
//     },
//     { 
//         id: 'D',
//         pregunta: "Extremidad de un ave",
//         respuesta: "Ala"
//     },
//     { 
//         id: 'E',
//         pregunta: "Extremidad de un ave",
//         respuesta: "Ala"
//     },
//     { 
//         id: 'F',
//         pregunta: "Extremidad de un ave",
//         respuesta: "Ala"
//     },
//     { 
//         id: 'G',
//         pregunta: "Extremidad de un ave",
//         respuesta: "Ala"
//     },
//     { 
//         id: 'H',
//         pregunta: "Extremidad de un ave",
//         respuesta: "Ala"
//     },
//     { 
//         id: 'I',
//         pregunta: "Extremidad de un ave",
//         respuesta: "Ala"
//     },
//     { 
//         id: 'J',
//         pregunta: "Extremidad de un ave",
//         respuesta: "Ala"
//     },
// ]

const bd__juego = [
    { 
        id: "A",
        pregunta: "¿Cuál es la capital de Argentina?",
        respuesta: "BUENOS AIRES"
    },
    { 
        id: "B",
        pregunta: "¿Cuál es el río más largo del mundo?",
        respuesta: "AMAZONAS"
    },
    { 
        id: "C",
        pregunta: "¿En qué país se encuentra la Torre Eiffel?",
        respuesta: "FRANCIA"
    },
    { 
        id: "D",
        pregunta: "¿Apellido del autor del Quijote?",
        respuesta: "CERVANTES"
    },
    { 
        id: "E",
        pregunta: "¿Cuál es el océano más grande del mundo?",
        respuesta: "PACIFICO"
    },
    { 
        id: "F",
        pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
        respuesta: "1939"
    },
    { 
        id: "G",
        pregunta: "¿Cuál es el país más grande del mundo?",
        respuesta: "RUSIA"
    },
    { 
        id: "H",
        pregunta: "¿Quién pintó La Mona Lisa?",
        respuesta: "LEONARDO DA VINCI"
    },
    { 
        id: "I",
        pregunta: "¿Qué animal es el rey de la selva?",
        respuesta: "LEON"
    },
    { 
        id: "J",
        pregunta: "¿En qué año llegó el hombre a la luna?",
        respuesta: "1968"
    }
];


//estructura para verificar que pregunta se ha respondido y cual no 
//lo pongo en un arreglo donde  i = 0 es que no ha respondido y 1 significa que sí lo ha respondido
//hay diez ceros porque puse 10 preguntas, si pongo más preguntas son más ceros que debo agregar acá
var estadoPreguntas = [0,0,0,0,0,0,0,0,0,0];
//Variable para llevar cuenta de respuestas correctas
var cantidadAcertadas = 0;
//variable de control en pregunta actual
//comienza en -1 porque la pregunta inicia en 0
var numPreguntaActual = -1;
//Base de datos con las preguntas 


//variables para el cronómetro
const timer = document.getElementById("tiempo");
//tiempo en segundos
const tiempoDelJuego = 60;
//variable tiempo restante
let timeLeft = tiempoDelJuego;
//variable que maneja el contador de tiempo
var countDown;
//creamos las letras de la A a la J
//va hasta la J porque son 10
//i + 96 es código
const contenedor = document.querySelector(".contenedor");
for ( i = 1; i <= total__preguntas; i++) {
    const circulo = document.createElement("div");
    circulo.classList.add("circulo");
    circulo.textContent = String.fromCharCode(i + 96);
    circulo.id = String.fromCharCode(i + 96).toUpperCase();
    contenedor.appendChild(circulo);

    //ángulo sobre el círculo
    const angulo = ((i - 1) / total__preguntas) * Math.PI * 2 - (Math.PI / 2);
    //coseno sobre el eje x
    const x = Math.round(95 + 120 * Math.cos(angulo));
    //seno sobre el eje y
    const y = Math.round(95 + 120 * Math.sin(angulo));
    circulo.style.left = `${x}px`;
    circulo.style.top = `${y}px`;
}


var comenzar = document.getElementById("comenzar");

    comenzar.addEventListener("click", function(event){
    document.getElementById("pantalla__inicial").style.display = "none";
    document.getElementById("pantalla__juego").style.display = "block";

    //tiempo (cronómetro)
    largarTiempo();
    cargarPregunta();
});

function largarTiempo(){
    countDown = setInterval(() => {
        //contador para restar tiempo 
        timeLeft--;
        //actualizar el texto del cronómetro 
        timer.innerText = timeLeft;

        //si llega a 0 el tiempo
        if (timeLeft < 0){
            clearInterval(countDown);
            //alert("se acabó el tiempo");
            mostrarPantallaFinal();
        }
    }, 1000);
}

//función que carga preguntas de bd__pregunta
function cargarPregunta(){
    numPreguntaActual++;
    //control si se llegó al final de la pregunta, para iniciar de cero
    if(numPreguntaActual >= total__preguntas){
        numPreguntaActual = 0;
    }

    //debo revisar que todavía hay preguntas por responder
    //es decir, ver si en el arreglo preguntas hay ceros
    if(estadoPreguntas.indexOf(0) >= 0){
        //ahora debo buscar cuál de todos es la que esta sin responder
        //es decir, buscar el primer 0 del arreglo
        while(estadoPreguntas[numPreguntaActual] == 1){
            numPreguntaActual++;
            if(numPreguntaActual >= total__preguntas){
                numPreguntaActual = 0;
            }
        }

        //ahora si busco la pregunta en la base de datos 
        document.getElementById("letra__pregunta").textContent = bd__juego[numPreguntaActual].id
        document.getElementById("pregunta").textContent = bd__juego[numPreguntaActual].pregunta
        var letra = bd__juego[numPreguntaActual].id;
        document.getElementById(letra).classList.add("pregunta__actual");
    }
    else{
        //ya se han respondido todas las preguntas
        clearInterval(countDown);
        mostrarPantallaFinal();

    }
}

//detectamos cambios en el input de respuestas con "enter"
//y controlamos que la respuesta sea correcta...  o no
var respuesta = document.getElementById("respuesta");

respuesta.addEventListener("keyup", function(event){
    //detecto si tocó la tecla enter
    if(event.keyCode===13){
        //por si toca enter sin querer o sin respuesta
        if(respuesta.value == ""){
            alert("debe ingresar una respuesta");
            return;
        }

        //obtengo la respuesta
        var txtRespuesta = respuesta.value.toUpperCase();
        //controlarRespuesta(txtRespuesta.toLowerCase());
        controlarRespuesta(txtRespuesta);
        
    }
});


/*---------------------------*/
var responder = document.getElementById("responder");
responder.addEventListener("click", function(event){
        if(respuesta.value == ""){
            alert("debe ingresar una respuesta");
            return;
        }
        //obtengo la respuesta
        var txtRespuesta = respuesta.value.toUpperCase();
        //controlarRespuesta(txtRespuesta.toLowerCase());
        controlarRespuesta(txtRespuesta);

});

//quiero hacer foco en el input per no me sale

// var input = document.getElementById("responder");
// input.focus();

/*-------------------------*/

function controlarRespuesta(txtRespuesta){
    //console.log(txtRespuesta);
    //verifico que la respuesta sea correcta 
    if(txtRespuesta == bd__juego[numPreguntaActual].respuesta){
        //alert("respuesta correcta");
        cantidadAcertadas++;

        //actualizar el estado de las pregunta a 1 en el arreglo para marcar que ya fue respondida
        estadoPreguntas[numPreguntaActual] = 1;

        var letra = bd__juego[numPreguntaActual].id;
        document.getElementById(letra).classList.remove("pregunta__actual");
        document.getElementById(letra).classList.add("bien");
    }else{
        //alert("INCORRECTO! jajajajajajaja");
        estadoPreguntas[numPreguntaActual] = 1;
        var letra = bd__juego[numPreguntaActual].id;
        document.getElementById(letra).classList.remove("pregunta__actual");
        document.getElementById(letra).classList.add("mal");

    }

    //limpiar el input
    respuesta.value = "";
    //cargamos la próxima pregunta
    cargarPregunta();
}

//botón para pasar de pregunta sin responder (pasapalabra)
var pasar = document.getElementById("pasar");
pasar.addEventListener("click", function(event){
    var letra = bd__juego[numPreguntaActual].id;
    document.getElementById(letra).classList.remove("pregunta__actual");

    cargarPregunta();
});

//muestro pantalla final
function mostrarPantallaFinal(){
    document.getElementById("acertadas").textContent = cantidadAcertadas;
    document.getElementById("score").textContent = (cantidadAcertadas*100)/10 + "% de acierto";
    document.getElementById("pantalla__juego").style.display = "none";
    document.getElementById("pantalla__final").style.display = "block";
}


//volver a empezar
var recomenzar = document.getElementById("recomenzar");
recomenzar.addEventListener("click", function(event){
    numPreguntaActual = -1;
    timeLeft = tiempoDelJuego;
    timer.innerText = timeLeft;
    cantidadAcertadas = 0;
    estadoPreguntas = [0,0,0,0,0,0,0,0,0,0];

    //saco las clases de los circulos
    var circulos = document.getElementsByClassName("circulo");
    for ( i = 0; i < circulos.length; i++) {
        circulos[i].classList.remove("pregunta__actual");
        circulos[i].classList.remove("bien");
        circulos[i].classList.remove("mal");
    }

    document.getElementById("pantalla__final").style.display = "none";
    document.getElementById("pantalla__juego").style.display = "block";
    respuesta.value = "";
    largarTiempo();
    cargarPregunta();

})





