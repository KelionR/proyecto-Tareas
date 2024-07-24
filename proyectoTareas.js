const tarea = document.getElementById("tarea")
const agregar = document.getElementById("agregar")
const contenerdorTareas = document.getElementById("contenedorTareas")
const eliminar = document.getElementById("eliminar")


agregar.addEventListener("click", function () {

let tareaF = tarea.value

let pTarea = document.createElement("p")

let botonEliminar = document.createElement("button")

let botonEditar = document.createElement("button")


pTarea.innerHTML=tareaF
pTarea.id="parrafoT"
pTarea.className="chamoy"
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

})