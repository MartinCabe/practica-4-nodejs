function add_tarea() {
    const nueva_tarea = document.getElementById('new-task');
    const lista_tarea = document.getElementById('task-list');

    if (nueva_tarea.value !== '') {
        const li = document.createElement('li');
        const tarea_id = new Date().getTime();
        li.id = `task-${tarea_id}`;
        li.innerHTML = `
            ${nueva_tarea.value}
            <button onclick="eliminar_tarea(${tarea_id})">Eliminar</button>
        `;
        lista_tarea.appendChild(li);
        nueva_tarea.value = '';
    }
}

function eliminar_tarea(tarea_id) {
    const tarea_eliminar = document.getElementById(`task-${tarea_id}`);
    if (tarea_eliminar) {
        tarea_eliminar.remove();
    }
}
