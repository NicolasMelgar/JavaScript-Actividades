//Variables
let miNumeroAdivinar = Math.floor(Math.random()*100) +1;
console.log(miNumeroAdivinar);
const resetInput = document.getElementById("numeroIngresado");
let numeroIngresado = document.getElementById("numeroIngresado");
let mensajeAdivinador = document.getElementById("mensajeAdivinador");
//Estas variables son opcionales, pero me gustan. Es todo lo que está debajo de ¡¡JUGUEMOS!!
let intentos = document.getElementById("intentos");
let intentoContador = -1; //el contador va sumando...pero quiero que arranque en cero
let vecesJugadas = document.getElementById("menosIntentos");
let menosIntento = 1;

//Desde el Botón verificar
function comprobarResultado(){
    intentoContador++;
    intentos.textContent = intentoContador;
    menosIntento;
    vecesJugadas.textContent = menosIntento; 

    let num = parseInt(numeroIngresado.value);//me aseguro que sea un número entero
    if(num < 1 || num > 100 || isNaN(num)){
        mensajeAdivinador.textContent = "Introduce un número válido";
        mensajeAdivinador.style.color = "blue";
        return;
    }
    if(num === miNumeroAdivinar){
        mensajeAdivinador.textContent = " "; //Dejo vacio el string porque el sweetalert ya envía el mensaje
        //Esto antes estaba así pero lo saco porque ya lo dice en el sweetalert
        // mensajeAdivinador.textContent = "¡¡¡Felicitaciones...lo has adivinado!!!";
        //mensajeAdivinador.style.color = "green";
        //A esta alerta se le aplica una clase que está en el CSS
        swal("Felicitaciones", `Has adivinado el número en ${intentoContador} intentos`, "success");
        
        numeroIngresado.disabled = true;
        btnAdivinar.disabled = true;
    }else if(num < miNumeroAdivinar){
        mensajeAdivinador.textContent = "El número a adivinar es mayor"
        mensajeAdivinador.style.color = "red";
    }else{
        mensajeAdivinador.textContent = "El número a adivinar es menor";
        mensajeAdivinador.style.color = "darkblue";
    }
}

//Desde el botón jugar
function reiniciar() {//comprobarResultado()
    miNumeroAdivinar = Math.floor(Math.random()*100) +1;
    console.log(miNumeroAdivinar);
    numeroIngresado.disabled = false;
    intentos.textContent = 0;
    intentoContador = 0;
    menosIntento++;
    vecesJugadas.textContent = menosIntento; //agregado porque no me sumaba los intentos la no llamar comprobarresultado()
    btnAdivinar.disabled = false;    
    numeroIngresado.value = "Escribe el número";
    return;
}

//Esto me permite presionar enter y que compruebe el resultado.
let input = document.getElementById("numeroIngresado");
input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        comprobarResultado();
    }
})