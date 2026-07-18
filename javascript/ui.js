const taskList = document.getElementById("taskList");

function updateStats() {

    const total = tasks.length;

    const completed = tasks.filter(task => task.completed).length;

    const pending = total - completed;

    const late = tasks.filter(task => {

        if (!task.date || task.completed) return false;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        return new Date(task.date) < today;

    }).length;

    document.getElementById("totalTasks").textContent = total;
    document.getElementById("completedTasks").textContent = completed;
    document.getElementById("pendingTasks").textContent = pending;
    document.getElementById("lateTasks").textContent = late;

}

function renderTasks() {

    taskList.innerHTML = "";

    if (tasks.length === 0) {

        taskList.innerHTML = `
            <p class="empty">
                Nenhuma tarefa cadastrada.
            </p>
        `;

        updateStats();

        return;

    }

    tasks.forEach(task => {

        taskList.innerHTML += `

        <div class="task ${task.completed ? "completed" : ""}">

            <h3>${task.title}</h3>

            <p>${task.description || "Sem descrição."}</p>

           <div class="task-footer">

    <div class="task-info">

        <span class="priority priority-${task.priority
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
            }">

            ${task.priority}

        </span>

        ${task.date
                ? `<span class="task-date">
                <i class="fa-regular fa-calendar"></i>
                ${new Date(task.date).toLocaleDateString("pt-BR")}
               </span>`
                : ""
            }

    </div>

<div class="task-actions">

                    <button onclick="toggleTask(${task.id})" title="Concluir">
                        <i class="fa-solid fa-check"></i>
                    </button>

                    <button onclick="editTask(${task.id})" title="Editar">
                        <i class="fa-solid fa-pen"></i>
                    </button>

                    <button onclick="deleteTask(${task.id})" title="Excluir">
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>

            </div>

        </div>

        `;

    });

    updateStats();

}