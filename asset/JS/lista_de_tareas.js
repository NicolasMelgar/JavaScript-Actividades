const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

function agregarTarea(){
    // el input.value si esta vacia es FontFaceSetLoadEvent, si tiene texto es true
    if(input.value){
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');
//texto ingresado por el usuario
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);
//iconos para verificar  o eliminar tareas
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);

        iconos.append(completar, eliminar);

        //agregar la tarea a la lista en html 
        listaDeTareas.appendChild(tareaNueva);
    }else{
        swal("Acción imposible", "Debes ingresar una tarea", "error");
    }
}

function completarTarea(e){
    //toggle...si tiene esa clase se salta y sino se la agrega
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

function eliminarTarea(e){
    //toggle...si tiene esa clase se salta y sino se la agrega
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

boton.addEventListener('click', agregarTarea);


//Esto me gusta y es muy versátil
//Con esto logro que al presionar enter se agregué la tarea
input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        agregarTarea();
    }
})