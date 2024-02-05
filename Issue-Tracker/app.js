function viewIssue() {
    // Get values from the input fields
    document.getElementById("add-issues").style.display = "block";
    var task_name = document.getElementById("task-name").value;
    var task_priority = document.getElementById("task-priority").value;
    var task_assignee = document.getElementById("task-assignee").value;

    // Create a new task card
    var taskCard = document.createElement('div');
    taskCard.classList.add('my-card');
    taskCard.innerHTML = `
        <div class="heading">
            <h2>${task_name}</h2>
        </div>
        <div class="paragraph">
            <p><strong>Priority:</strong> ${task_priority}</p>
        </div>
        <div class="text">
            <p><strong>Assignee:</strong> ${task_assignee}</p>
        </div>
        <div class="button">
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    // Append the task card to the task container
    var taskContainer = document.getElementById('task-container');
    taskContainer.appendChild(taskCard);

    // Clear input fields
    document.getElementById("task-name").value = "";
    document.getElementById("task-priority").value = "low";
    document.getElementById("task-assignee").value = "";
}

function deleteTask(taskElement) {
    // Remove the task element from the DOM
    taskElement.parentElement.parentElement.remove();
}
