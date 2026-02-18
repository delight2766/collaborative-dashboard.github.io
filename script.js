let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JASON.stringify(tasks));
  )

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  task.forEach((task, index) => {
    const li = document.createElement("li");

    const taskInfo = document.createElement("div");

    taskInfo.classList.add("task-info");

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) span.classList.add("completed");

    span.onclick = () => {
      tasks[index].completed;
      saveTasks();
      renderTasks();
    };

    const member = document.createElement("span");
    member.textContent = "Assigned to: "+ (task.member || "Unassigned");
    member.classList.add("member");

    taskInfo.appendChild(span);
    taskInfo.appendChild(member);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");

    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };
    li.appendChild(taskInfo)
    li.appendChild(deleteBtn)
    taskList.appendChild(li);
  });

  updateProgress();
}

  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const memberSelect = document.getElementById("memberSelect");

    const text = taskInput.value.trim();
    const member = memberSelect.value;

    if (text === "") return;

    tasks.push({
      text: text,
      completed: false,
      member: member
    });
    taskInput.value = "";
    memberSelect.value = "";
    saveTasks();
    renderTasks();
  }

  function updateProgress() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const percent = total === 0 ? 0 : (completed / total) * 100;

    document.getElementById("progressFill").style.width = percent + "%";

    document.getElementById("progressText").textContent =
      Math.round(percent) + "% Completed";
  }
  rendeTasks();
    
