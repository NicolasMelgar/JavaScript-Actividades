//¡SWETT ALERT
//Para tener el nombre en la página principal

/* //---...HACER...---//
esto si tendría sentido guardarlo en el local storage y entonces si el usuario entra no le pide el nombre
si es que ya ingresó previamente sino cada vez que reinicio la página debo colocar el nombre
*/

//Esto guarda en Session, así no me pide el nombre mientras estoy o recargo la ventana

let nombre = JSON.parse(sessionStorage.getItem("nombre"));

sessionStorage.getItem("nombre", nombre) || sessionStorage.setItem("nombre", nombre);

if (nombre) {
    let nombreAlumno = document.createElement("h3");
    nombreAlumno.innerHTML = nombre;
    nombreAlumnoContenedor.append(nombre);
} else {
    Swal.fire({
        title: 'Ingresa tu nombre',
        input: 'text',
        inputPlaceholder: 'Escribe aquí'
    }).then((result) => {
        if (result.value) {
            nombre = result.value;
            sessionStorage.setItem("nombre", JSON.stringify(nombre));
            let nombreAlumno = document.createElement("h3");
            nombreAlumno.innerHTML = nombre;
            nombreAlumnoContenedor.append(nombre);
        }
    });
}

//Esto es lo mismo pero con Local. El tema con el local es que no cambia nunca más 
/*
let nombre = JSON.parse(localStorage.getItem("nombre"));

localStorage.getItem("nombre", nombre) || localStorage.setItem("nombre", nombre);

if (nombre) {
    let nombreAlumno = document.createElement("h3");
    nombreAlumno.innerHTML = nombre;
    nombreAlumnoContenedor.append(nombre);
} else {
    Swal.fire({
        title: 'Ingresa tu nombre',
        input: 'text',
        inputPlaceholder: 'Escribe aquí'
    }).then((result) => {
        if (result.value) {
            nombre = result.value;
            localStorage.setItem("nombre", JSON.stringify(nombre));
            let nombreAlumno = document.createElement("h3");
            nombreAlumno.innerHTML = nombre;
            nombreAlumnoContenedor.append(nombre);
        }
    });
}
*/
