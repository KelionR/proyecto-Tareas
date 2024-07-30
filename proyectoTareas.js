const tarea = document.getElementById("tarea");
const agregar = document.getElementById("agregar");
const contenerdorTareas = document.getElementById("contenedorTareas");
const evento = document.getElementById("evento");
const añadir = document.getElementById("añadir");
const contenerdorEventos = document.getElementById("contenedorEventos");


function cargarTareas() {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.forEach(tarea => {
        crearElementoTarea(tarea.texto);
    });
}

function cargarEventos() {
    const eventos = JSON.parse(localStorage.getItem("eventos")) || [];
    eventos.forEach(evento => {
        crearElementoEvento(evento.texto);
    });
}

function crearElementoTarea(texto) {
    let pTarea = document.createElement("h4");
    let botonEliminar = document.createElement("button");
    let botonEditar = document.createElement("button");

    pTarea.innerHTML = texto;
    pTarea.className = "tareas";
    botonEliminar.innerHTML = "Eliminar Tarea";
    botonEditar.innerHTML = "Editar tarea";

    contenerdorTareas.appendChild(pTarea);
    contenerdorTareas.appendChild(botonEliminar);
    contenerdorTareas.appendChild(botonEditar);

    botonEliminar.addEventListener("click", function () {
        eliminarTarea(pTarea.textContent);
        pTarea.remove();
        botonEliminar.remove();
        botonEditar.remove();
    });

    botonEditar.addEventListener("click", function () {
        pTarea.textContent = prompt("Nuevo Texto", pTarea.textContent);
        actualizarTareas();
    });
}

function crearElementoEvento(texto) {
    let pEvento = document.createElement("h4");
    let botonEliminar = document.createElement("button");
    let botonEditar = document.createElement("button");

    pEvento.innerHTML = texto;
    pEvento.className = "eventos";
    botonEliminar.innerHTML = "Eliminar Evento";
    botonEditar.innerHTML = "Editar Evento";

    contenerdorEventos.appendChild(pEvento);
    contenerdorEventos.appendChild(botonEliminar);
    contenerdorEventos.appendChild(botonEditar);

    botonEliminar.addEventListener("click", function () {
        eliminarEvento(pEvento.textContent);
        pEvento.remove();
        botonEliminar.remove();
        botonEditar.remove();
    });

    botonEditar.addEventListener("click", function () {
        pEvento.textContent = prompt("Nuevo Texto", pEvento.textContent);
        actualizarEventos();
    });
}

agregar.addEventListener("click", function () {
    let task = tarea.value;
    if (task) {
        crearElementoTarea(task);
        let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
        tareas.push({ texto: task });
        localStorage.setItem("tareas", JSON.stringify(tareas));
        tarea.value = ""; 
    }
});


añadir.addEventListener("click", function () {
    let eventosText = evento.value;
    if (eventosText) {
        crearElementoEvento(eventosText);
        let eventos = JSON.parse(localStorage.getItem("eventos")) || [];
        eventos.push({ texto: eventosText });
        localStorage.setItem("eventos", JSON.stringify(eventos));
        evento.value = "";
    }
});

function eliminarTarea(texto) {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas = tareas.filter(t => t.texto !== texto);
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function eliminarEvento(texto) {
    let eventos = JSON.parse(localStorage.getItem("eventos")) || [];
    eventos = eventos.filter(e => e.texto !== texto);
    localStorage.setItem("eventos", JSON.stringify(eventos));
}

function actualizarTareas() {
    let tareas = [];
    document.querySelectorAll(".tareas").forEach(tarea => {
        tareas.push({ texto: tarea.textContent });
    });
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function actualizarEventos() {
    let eventos = [];
    document.querySelectorAll(".eventos").forEach(evento => {
        eventos.push({ texto: evento.textContent });
    });
    localStorage.setItem("eventos", JSON.stringify(eventos));
}

document.addEventListener("DOMContentLoaded", function() {
    cargarTareas();
    cargarEventos();
});