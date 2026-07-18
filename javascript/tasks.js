function addTask(title, description, priority, date) {

    const task = {
        id: Date.now(),
        title,
        description,
        priority,
        date,
        completed: false
    };

    tasks.push(task);

    saveTasks();
    renderTasks();

}

function toggleTask(id) {

    const task = tasks.find(task => task.id === id);

    if (!task) return;

    task.completed = !task.completed;

    saveTasks();
    renderTasks();

}

function deleteTask(id) {

    const confirmDelete = confirm("Deseja excluir esta tarefa?");

    if (!confirmDelete) return;

    tasks = tasks.filter(task => task.id !== id);

    saveTasks();
    renderTasks();

}

function editTask(id) {

    const task = tasks.find(task => task.id === id);

    if (!task) return;

    document.getElementById("taskTitle").value = task.title;
    document.getElementById("taskDescription").value = task.description;
    document.getElementById("taskPriority").value = task.priority;
    document.getElementById("taskDate").value = task.date;

    deleteTaskWithoutConfirm(id);

}

function deleteTaskWithoutConfirm(id) {

    tasks = tasks.filter(task => task.id !== id);

    saveTasks();

}