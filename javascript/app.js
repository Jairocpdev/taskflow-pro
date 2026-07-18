const currentDate = document.getElementById("currentDate");

const today = new Date();

const formattedDate = today.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
});

currentDate.textContent =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

const form = document.getElementById("taskForm");

const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskPriority = document.getElementById("taskPriority");
const taskDate = document.getElementById("taskDate");

renderTasks();

form.addEventListener("submit", (event) => {

    event.preventDefault();

    if (taskTitle.value.trim() === "") {

        alert("Digite o título da tarefa.");

        taskTitle.focus();

        return;

    }

    addTask(
        taskTitle.value.trim(),
        taskDescription.value.trim(),
        taskPriority.value,
        taskDate.value
    );

    form.reset();

});