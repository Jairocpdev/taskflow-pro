let tasks = loadTasks();

function loadTasks() {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}