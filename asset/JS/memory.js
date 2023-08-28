//faltaria un sweet alert felicitando al final y reiniciando automáticamente
//VAriables
let selecciones = [];//para la función seleccionartarjeta
let iconos = [];//Creamos los íconos
let cantidadDeTarjetas = 24;//a esto le podría asignar un promt para que seleccionen la dificultad en cantidad????
generarTablero();

//Acá podrían ser imágenes, letras...etc
function cargarIconos(){
    iconos = [
        `<i class="fa-solid fa-shield-halved"></i>`,
        `<i class="fa-solid fa-puzzle-piece"></i>`,
        `<i class="fa-solid fa-chess-rook"></i>`,
        `<i class="fa-solid fa-chess-queen"></i>`,
        `<i class="fa-solid fa-chess-pawn"></i>`,
        `<i class="fa-solid fa-chess-knight"></i>`,
        `<i class="fa-solid fa-chess-board"></i>`,
        `<i class="fa-solid fa-user"></i>`,
        `<i class="fa-solid fa-dice-d20"></i>`,
        `<i class="fa-solid fa-dungeon"></i>`,
        `<i class="fa-solid fa-heart"></i>`,
        `<i class="fa-solid fa-ghost"></i>`,
    ]
}

function generarTablero(){
    cargarIconos();
    selecciones = [];
    let tablero = document.getElementById("tablero");
    let tarjetas = [];
    for (let i = 0; 
        i < cantidadDeTarjetas; /*porque son 6 columnas de cuatro filas, o podría usar: tarjetas.length*/
        i++) {
        tarjetas.push(`
        <div class="area__tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${iconos[0]}
                </div>
                <div class="cara superior">
                    <i class="fa-solid fa-dragon"></i>
                </div>
            </div>
        </div>
        `);
        if(i % 2 == 1){//si la división del contador es 1 borro un ícono
            iconos.splice(0, 1); //esto remueve un elemento de la posición 0
        }
    }
    //Con esto desordeno las tarjetas de forma aleatoria
    tarjetas.sort(()=> Math.random() - 0.5);
    //Cargo el tablero con las tarjetas
    tablero.innerHTML = tarjetas.join(" ");
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            trasera1.style.background = "green"
            trasera2.style.background = "green"
        }
        if (fin()){
            swal("¡¡Felicitaciones!!", `Has terminado el juego!!!`, "success");
        
        }
    }, 1000);
}

function fin(){
    for (let i = 0; i < cantidadDeTarjetas; i++) {
        let trasera = document.getElementById("trasera" + i);
        if (trasera.style.background != "green"){
            return false
        }
        
    }
    return true
}