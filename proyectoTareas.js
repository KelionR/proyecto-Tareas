const tarea = document.getElementById("tarea")
const agregar = document.getElementById("agregar")
const contenerdorTareas = document.getElementById("contenedorTareas")
const eliminar = document.getElementById("eliminar")


agregar.addEventListener("click", function () {

let task = tarea.value

let tareaF = tarea.value

let pTarea = document.createElement("h4")

let botonEliminar = document.createElement("button")

let botonEditar = document.createElement("button")


pTarea.innerHTML=tareaF
pTarea.id="parrafoT"
pTarea.className="tareas"
botonEliminar.innerHTML= "Eliminar Tarea" 
botonEditar.innerHTML= "Editar tarea" 


contenerdorTareas.appendChild(pTarea)
contenerdorTareas.appendChild(botonEliminar)
contenerdorTareas.appendChild(botonEditar)

botonEliminar.addEventListener("click", function () {
pTarea.remove()
botonEliminar.remove()
botonEditar.remove()


})

botonEditar.addEventListener("click", function () {
    pTarea.textContent = prompt("Nuevo Texto", pTarea.textContent)
    
    })

    localStorage.setItem("tareas" ,task)

    let taskOb = localStorage.getItem("task")
    
    console.log(taskOb)

})

const evento = document.getElementById("evento")
const añadir = document.getElementById("añadir")
const contenerdorEventos = document.getElementById("contenedorEventos")
const borrar = document.getElementById("borrar")


añadir.addEventListener("click", function () {

let eventos = evento.value

localStorage.setItem("evento", eventos)

let eventoF = evento.value

let pEvento = document.createElement("h4")

let botonEliminar = document.createElement("button")

let botonEditar = document.createElement("button")


pEvento.innerHTML= eventoF
pEvento.id="parrafoT"
pEvento.className="eventos"
botonEliminar.innerHTML= "Eliminar Evento" 
botonEditar.innerHTML= "Editar Evento" 


contenerdorEventos.appendChild(pEvento)
contenerdorEventos.appendChild(botonEliminar)
contenerdorEventos.appendChild(botonEditar)

botonEliminar.addEventListener("click", function () {
pEvento.remove()
botonEliminar.remove()
botonEditar.remove()


})

botonEditar.addEventListener("click", function () {
    pEvento.textContent = prompt("Nuevo Texto", pEvento.textContent)
    
    })

})