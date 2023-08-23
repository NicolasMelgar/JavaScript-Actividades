//¡SWETT ALERT?
//Para tener el nombre en la página principal


/* //---...HACER...---//
esto si tendría sentido guardarlo en el local storage
y entonces si el usuario entra no le pide el nombre
si es que ya ingresó previamente
sino cada vez que reinicio la página debo colocar el nombre
*/

//No logro que el nombre me quede guardado en el session
//sessionStorage.getItem("nombre", nombre) || sessionStorage.setItem("nombre", nombre);
// if(JSON.parse(sessionStorage.getItem("nombre")) === false){

// }
//let nombre = "";
//JSON.parse(sessionStorage.getItem("nombre")) || sessionStorage.setItem("nombre", JSON.stringify(nombre));
Swal.fire({
    title: 'Ingresa tu nombre',
    input: 'text',
    inputPlaceholder: 'Escribe aquí'
}).then((result) => {
    if (result.value) {
        
        nombre = result.value;
        let nombreAlumno = document.createElement("h3")
        nombreAlumno.innerHTML = "nombre"
        nombreAlumnoContenedor.append(nombre);
        sessionStorage.setItem("nombre", nombre);
        //console.log('Tu nombre es ' + result.value);
        //console.log('Tu nombre es ' + nombre);
    }
});


