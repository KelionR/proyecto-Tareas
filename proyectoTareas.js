const tarea = document.getElementById("tarea");
const agregar = document.getElementById("agregar");
const contenerdorTareas = document.getElementById("contenedorTareas");
const evento = document.getElementById("evento");
const fecha = document.getElementById("fecha");
const añadir = document.getElementById("añadir");
const contenerdorEventos = document.getElementById("contenedorEventos");
const importancia = document.getElementById("importancia");

function cargarTareas() {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.sort(function(a, b) {
        const prioridades = { alta: 1, media: 2, baja: 3 };
        return prioridades[a.importancia] - prioridades[b.importancia];
    });
    tareas.forEach(function(tarea) {
        crearElementoTarea(tarea.texto, tarea.importancia);
    });
}

function cargarEventos() {
    const eventos = JSON.parse(localStorage.getItem("eventos")) || [];
    eventos.forEach(function(evento) {
        crearElementoEvento(evento.texto, evento.fecha);
    });
}

function crearElementoTarea(texto, importancia) {
    let pTarea = document.createElement("h4");
    let botonEliminar = document.createElement("button");
    let botonEditar = document.createElement("button");

    pTarea.innerHTML = texto + " - Importancia: " + importancia;
    pTarea.className = "tareas";
    botonEliminar.innerHTML = "Eliminar Tarea";
    botonEditar.innerHTML = "Editar tarea";

    contenerdorTareas.appendChild(pTarea);
    contenerdorTareas.appendChild(botonEliminar);
    contenerdorTareas.appendChild(botonEditar);

    botonEliminar.addEventListener("click", function () {
        eliminarTarea(texto);
        pTarea.remove();
        botonEliminar.remove();
        botonEditar.remove();
    });

    botonEditar.addEventListener("click", function () {
        let nuevoTexto = prompt("Nuevo Texto", texto);
        let nuevaImportancia = prompt("Nueva Importancia (alta, media, baja)", importancia);
        if (nuevoTexto) {
            pTarea.textContent = nuevoTexto + " - Importancia: " + nuevaImportancia;
            actualizarTareas();
        }
    });
}

function crearElementoEvento(texto, fecha) {
    let pEvento = document.createElement("h4");
    let botonEliminar = document.createElement("button");
    let botonEditar = document.createElement("button");

    pEvento.innerHTML = texto + " - Fecha: " + fecha;
    pEvento.className = "eventos";
    botonEliminar.innerHTML = "Eliminar Evento";
    botonEditar.innerHTML = "Editar Evento";

    contenerdorEventos.appendChild(pEvento);
    contenerdorEventos.appendChild(botonEliminar);
    contenerdorEventos.appendChild(botonEditar);

    botonEliminar.addEventListener("click", function () {
        eliminarEvento(texto);
        pEvento.remove();
        botonEliminar.remove();
        botonEditar.remove();
    });

    botonEditar.addEventListener("click", function () {
        let nuevoTexto = prompt("Nuevo Texto", texto);
        let nuevaFecha = prompt("Nueva Fecha (YYYY-MM-DD)", fecha);
        if (nuevoTexto) {
            pEvento.textContent = nuevoTexto + " - Fecha: " + nuevaFecha;
            actualizarEventos();
        }
    });
}

agregar.addEventListener("click", function () {
    let task = tarea.value;
    let imp = importancia.value;
    if (task) {
        crearElementoTarea(task, imp);
        let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
        tareas.push({ texto: task, importancia: imp });
        localStorage.setItem("tareas", JSON.stringify(tareas));
        tarea.value = "";
    }
});

añadir.addEventListener("click", function () {
    let eventosText = evento.value;
    let fechaText = fecha.value;
    if (eventosText) {
        crearElementoEvento(eventosText, fechaText);
        let eventos = JSON.parse(localStorage.getItem("eventos")) || [];
        eventos.push({ texto: eventosText, fecha: fechaText });
        localStorage.setItem("eventos", JSON.stringify(eventos));
        evento.value = "";
        fecha.value = "";
    }
});

function eliminarTarea(texto) {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas = tareas.filter(function(t) {
        return t.texto !== texto;
    });
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function eliminarEvento(texto) {
    let eventos = JSON.parse(localStorage.getItem("eventos")) || [];
    eventos = eventos.filter(function(e) {
        return e.texto !== texto;
    });
    localStorage.setItem("eventos", JSON.stringify(eventos));
}

function actualizarTareas() {
    let tareas = [];
    document.querySelectorAll(".tareas").forEach(function(tarea) {
        let partes = tarea.textContent.split(" - Importancia: ");
        tareas.push({ texto: partes[0], importancia: partes[1] });
    });
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function actualizarEventos() {
    let eventos = [];
    document.querySelectorAll(".eventos").forEach(function(evento) {
        let partes = evento.textContent.split(" - Fecha: ");
        eventos.push({ texto: partes[0], fecha: partes[1] });
    });
    localStorage.setItem("eventos", JSON.stringify(eventos));
}

document.addEventListener("DOMContentLoaded", function() {
    cargarTareas();
    cargarEventos();
});
