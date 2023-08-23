//Variables que voy a usar
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operacion = document.getElementById("operacion");
let resultado__alumno = document.getElementById("resultado__alumno");
let mensaje__corregido = document.getElementById("mensaje__corregido");
let operacion__actual;
let n1, n2;
let rango = document.getElementById("rango");//Rango ingresado manualmente...podría dar 4 rangos yo 0 - 100 / 101 - 1000 / 1001 - 10000 / 10001 - 100000 y listo

//SUMA
function btnSumar() {
    mensaje__corregido.innerHTML = "";//vaciar el div
    activarBoton("sumar");//agregamos la clase activa al boton y quitamos el resto
    operacion__actual = "+"; //asignamos la operación suma a la etiqueta
    operacion.innerHTML = " + "; //gereramos los numeros aleatorios
    nuevaSuma();
}

function nuevaSuma() {
    n1 = parseInt(Math.random() * rango.value);
    n2 = parseInt(Math.random() * rango.value);
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    resultado__alumno.focus();
}

//RESTA
function btnRestar() {
    mensaje__corregido.innerHTML = "";
    activarBoton("restar");
    operacion__actual = "-";
    operacion.innerHTML = " - ";
    nuevaResta();
}

function nuevaResta() {
    n1 = parseInt(Math.random() * rango.value);
    n2 = parseInt(Math.random() * rango.value);
    //con esta parte evito los números negativos en los resultados
    if (n1 > n2) {
        num1.innerHTML = n1;
        num2.innerHTML = n2;
    } else {
        nuevaResta();
    }
    resultado__alumno.focus();
}

//MULTIPLICACIÓN
function btnMultiplicar() {
    mensaje__corregido.innerHTML = "";
    activarBoton("multiplicar");
    operacion__actual = "*";
    operacion.innerHTML = " x ";
    nuevaMultiplicacion();
}

function nuevaMultiplicacion() {
    if (rango.value <= 1000) {
        n1 = parseInt(Math.random() * rango.value);
        n2 = parseInt(Math.ceil(Math.random() * 10));//el "ceil" me deja siempre redondeo para arriba...así que evito la multiplicación por 0
        num1.innerHTML = n1;
        num2.innerHTML = n2;
    } else {//acá sería si es mayor a 1000 el rango elegido por el alumno
        n1 = parseInt(Math.random() * rango.value);
        n2 = parseInt(Math.floor(Math.random() * 100));//A veces aparece uno de una cifra. No me molesta, así que lo dejo. 
        num1.innerHTML = n1;
        num2.innerHTML = n2;
    }
    resultado__alumno.focus();
}

//DIVIDIR
function btnDividir() {
    mensaje__corregido.innerHTML = "";
    activarBoton("dividir");
    operacion__actual = "/";
    operacion.innerHTML = " / ";
    nuevaDividirJusta();
    //nuevaDividirDificil();
}
//DIVIDIR DIFÍCIL O INEXACTA
function nuevaDividirDificil() {
    n1 = parseInt(Math.random() * rango.value);
    n2 = parseInt(Math.random() * 10);
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    resultado__alumno.focus();
}

//DIVISIÓN JUSTA O EXACTA
function nuevaDividirJusta() {
    let arrayDivisores = [];//creo un array vacio para divisores
    n1 = parseInt(Math.random() * rango.value);//este primer número lo genero igual que en todas
    //busco los divisores del número 
    //podría poner i <= n1 pero no quiero divisiones 25/25 o 50/50
    for (let i = 0; i < n1; i++) {
        //quería usarlo así:  if(n1%i === 0 && i != 1) pero los números primos me quedan con "undefined"
        //Supongo que tendría que hacerle la verificación a n1 que no sea primo creo.
        if (n1 % i === 0) {//la forma n1%i === 0 me asegura que sea un divisor, esta misma idea se usa para saber si es par o impar un numero
            arrayDivisores.push(i);
        }
    }
    //seleccionamos una posición cualquiera del arrayDivisores
    let posicionAleatoria = parseInt(Math.random() * (arrayDivisores.length));
    //n2 = Math.max(...arrayDivisores);//esto me da el máximo divisor
    n2 = arrayDivisores[posicionAleatoria];//este me da un divisor aleatorio 
    //Esto resuelve el tema de la división entre 1 y de los números primeros porque...
    //si el divisor es igual a 1 significa que es un número primo...porque antes descarté el divisor igual al n1
    //Y además descarto el undefined que solía aparecerme en las divisiones
    //Con este if verifico y si es 1 o undefined le digo que vuelva a empezar la función
    if (n2 == 1 || n2 == undefined) {
        nuevaDividirJusta()
    }
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    resultado__alumno.focus();
}

//CORRECCIÓN
function corregir() {
    //si el alumno no escribe nada...paro (return)
    if (resultado__alumno.value == "") {
        return;
    }
    let respuesta;
    //Si ha colocado una respuesta armo las operaciones
    let operacion = n1 + " " + operacion__actual + " " + n2;
    respuesta = eval(operacion);

    //Esto me guarda la última operación en el localStorage.
    localStorage.setItem("cuenta:", operacion);
    localStorage.setItem("solución:", respuesta);
    localStorage.setItem("solución_alumno", resultado__alumno.value);

    //Elemento i para agregar el icono de bien o mal con la operación
    var i = document.createElement("i");
    if (resultado__alumno.value.split('').reverse().join('') == respuesta) {
        i.className = "fa-solid fa-check verde";
        //Con esto dejo agregada la operacion 
        const h2 = document.createElement("h2");
        h2.textContent = "Operación planteada: " + operacion + " = " + respuesta + "   ";
        mensaje__corregido.appendChild(h2);
        const h3 = document.createElement("h3");
        h3.textContent = " El alumno respondió: " + resultado__alumno.value.split('').reverse().join('');//Esto es porque usé escribir de derecha a izq en CSS (.reverso)
        mensaje__corregido.appendChild(h3);
    } else {
        i.className = "fa-solid fa-xmark rojo";
        //Con esto dejo agregada la operación 
        const h2 = document.createElement("h2");
        h2.textContent = "Operación planteada: " + operacion + " = " + respuesta + "   ";
        mensaje__corregido.appendChild(h2);
        const h3 = document.createElement("h3");
        h3.textContent = " El alumno respondió: " + resultado__alumno.value.split('').reverse().join('');
        mensaje__corregido.appendChild(h3);
    }
    //Creo el elemento al div de correcciones 
    mensaje__corregido.appendChild(i);
    //controlar en qué operación estoy para generar una nueva operación. 
    if (operacion__actual == "+") {
        nuevaSuma();
    }
    else if (operacion__actual == "-") {
        nuevaResta();
    }
    else if (operacion__actual == "*") {
        nuevaMultiplicacion();
    }
    else if (operacion__actual == "/") {
        nuevaDividirJusta(); //ojo que acá también puede ir la otra función de división
    }
    //limpio el input de resultado para reiniciar
    resultado__alumno.value = "";
}

//Operación que está activa en verde
function activarBoton(idBoton) {
    document.getElementById("sumar").className = "";
    document.getElementById("restar").className = "";
    document.getElementById("multiplicar").className = "";
    document.getElementById("dividir").className = "";
    document.getElementById(idBoton).className = "activado";
}

//CORRECCIÓN. agrego el enter en vez de clik solo con el ratón para corregir
let input = document.getElementById("resultado__alumno");
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        corregir();
    }
})
//RANGO. Para dar "enter" en el rango y que llame a la función sumar y deje todo listo para empezar
//A priori parto de la suma porque los niños siempre la eligen primero
let input2 = document.getElementById("rango");
input2.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        btnSumar();
    }
})