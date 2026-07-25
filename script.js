"use strict";
let tasks = [
  {
    id: 1,
    title: "Digital Logic Design",
    summary:
      "I make the tally counter project that contain the method of the mux for selection",
    tag: "semproject",
    priority: "high",
    date: "2/7/2026",
    status: "done",
  },
  {
    id: 2,
    title: "Electronics II",
    summary: "I make the function generator that contain LM417 IC",
    tag: "semproject",
    priority: "medium",
    date: "9/7/2026",
    status: "doing",
  },
  {
    id: 3,
    title: "JS",
    summary: "I make the Kanban Board where u can make ur on todo list",
    tag: "Webdev",
    priority: "low",
    date: "12/7/2026",
    status: "pending",
  },
];
//Load the saved task
function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    tasks = JSON.parse(saved);
  }
}

loadTasks();

//Storage of task
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
//Priority Class Creation
const getPriorityClass = function (priority) {
  const map = {
    low: "border-l-teal",
    medium: "border-l-amber",
    high: "border-l-red-400",
  };
  return map[priority];
};

//Card creation
const cardCreation = function (task) {
  const card = document.createElement("article");
  const baseClass =
    "bg-white rounded-xl border border-gray-200 border-l-4 p-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition";
  card.className = baseClass + " " + getPriorityClass(task.priority);

  card.innerHTML = `
    <div class="flex items-start justify-between">
      <p class="text-sm font-medium">${task.title}</p>
    </div>
    <p class="text-xs text-slate mt-1">${task.summary}</p>
    <div>
      <span class="text-xs bg-lavender text-violet px-2 py-0.5 rounded-full">#${task.tag}</span>
      <span class="text-xs bg-red-50 text-red-500 px-2 py-0.5 rounded-full">${task.priority}</span>
    </div>
    <div>
      <span class="flex items-center gap-1 text-xs text-slate">${task.date}</span>
      <!-- avatar? -->
    </div>
<button
  class="delete-btn inline-flex size-9 items-center justify-center rounded-lg text-slate-400 transition-all duration-200 hover:bg-red-50 hover:text-red-500 focus:outline-none focus:ring-4 focus:ring-red-100"
  data-id="${task.id}"
  title="Delete task"
  aria-label="Delete task"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.8"
    stroke="currentColor"
    class="size-5"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 7.5h12M9.5 7.5V5.75A1.75 1.75 0 0 1 11.25 4h1.5a1.75 1.75 0 0 1 1.75 1.75V7.5m2.25 0v10.75A1.75 1.75 0 0 1 15 20H9a1.75 1.75 0 0 1-1.75-1.75V7.5m3.25 3v5m3-5v5"
    />
  </svg>
</button>  `;
  return card;
};

//task render - full board (index.html)
function renderAllTask() {
  tasks.forEach((task) => {
    let containerId = "";
    if (task.status === "pending") {
      containerId = "pending-list";
    } else if (task.status === "doing") {
      containerId = "doing-list";
    } else if (task.status === "done") {
      containerId = "done-list";
    }
    const card = cardCreation(task);
    document.getElementById(containerId).appendChild(card);
  });
  updateCount();
}

//task render - single status page (pending.html / doing.html / done.html)
function renderTasksByStatus(status, containerId) {
  tasks.forEach((task) => {
    if (task.status === status) {
      const card = cardCreation(task);
      document.getElementById(containerId).appendChild(card);
    }
  });
  updateCount();
}

//Update Count
function updateCount() {
  let pendingCount = 0;
  let doingCount = 0;
  let doneCount = 0;
  tasks.forEach((task) => {
    switch (task.status) {
      case "pending":
        pendingCount++;
        break;
      case "doing":
        doingCount++;
        break;
      case "done":
        doneCount++;
        break;
    }
  });

  const pendingBadge = document.getElementById("pending-count");
  const doingBadge = document.getElementById("doing-count");
  const doneBadge = document.getElementById("done-count");
  const totalBadge = document.getElementById("total-count");

  if (pendingBadge) pendingBadge.textContent = pendingCount;
  if (doingBadge) doingBadge.textContent = doingCount;
  if (doneBadge) doneBadge.textContent = doneCount;
  if (totalBadge) totalBadge.textContent = tasks.length;
}

//Delete the Task
document.addEventListener("click", function (event) {
  const deleteBtn = event.target.closest(".delete-btn");
  if (!deleteBtn) return;

  const taskId = Number(deleteBtn.dataset.id);
  tasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });

  deleteBtn.closest("article").remove();
  updateCount();
  saveTasks();
});

//Create Task - guarded, since not every page has this button
function createTask() {
  const createTaskBtn = document.getElementById("create-task-btn");
  if (createTaskBtn) {
    createTaskBtn.addEventListener("click", function (event) {
      event.preventDefault();

      const title = document.getElementById("task-title").value;
      const description = document.getElementById("task-desc").value;
      const dueDate = document.getElementById("due-date").value;
      const status = document.querySelector(
        'input[name="status"]:checked',
      ).value;
      const priority = document.querySelector(
        'input[name="priority"]:checked',
      ).value;
      const tag = document.getElementById("new-tag-input").value;

      const newTask = {
        id: Date.now(),
        title: title,
        summary: description,
        tag: tag,
        priority: priority,
        date: dueDate,
        status: status,
      };

      tasks.push(newTask);
      saveTasks();
      let containerId = "";
      if (newTask.status === "pending") {
        containerId = "pending-list";
      } else if (newTask.status === "doing") {
        containerId = "doing-list";
      } else if (newTask.status === "done") {
        containerId = "done-list";
      }

      const card = cardCreation(newTask);
      document.getElementById(containerId).appendChild(card);
      document.getElementById("add-task-modal").close();
      document.getElementById("add-task-form").reset();
      updateCount();
    });
  }
}

//Update task by Button in boards
document.addEventListener("click", function (event) {
  const addBtn = event.target.closest(".column-add-btn");
  if (!addBtn) return;

  const status = addBtn.dataset.status;

  const radioToCheck = document.querySelector(
    `input[name="status"][value="${status}"]`,
  );
  if (radioToCheck) {
    radioToCheck.checked = true;
  }

  document.getElementById("add-task-modal").showModal();
});

//Decide which render function to run, based on which containers this page actually has
if (
  document.getElementById("pending-list") &&
  document.getElementById("doing-list") &&
  document.getElementById("done-list")
) {
  renderAllTask();
} else if (document.getElementById("pending-list")) {
  renderTasksByStatus("pending", "pending-list");
} else if (document.getElementById("doing-list")) {
  renderTasksByStatus("doing", "doing-list");
} else if (document.getElementById("done-list")) {
  renderTasksByStatus("done", "done-list");
}
