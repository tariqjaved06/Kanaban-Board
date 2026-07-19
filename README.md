<div align="center">

# TaskFlow

A modern Kanban task-management dashboard for organizing work, projects, and productivity.

> Organize your work. Track your progress. Flow through your tasks.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

</div>

---

## Preview

> Add a screenshot of the TaskFlow dashboard here.

---

## About the Project

TaskFlow is a Kanban-style productivity dashboard that helps users organize tasks, track progress, manage projects, and stay on top of priorities and due dates — all through a simple visual workflow:

**Pending → Doing → Done**

Tasks are grouped using lightweight hashtag labels rather than a rigid project hierarchy, so organizing work across coursework, a job search, or a team sprint stays flexible.

---

## Features

### Currently Available

- [x] Kanban board with Pending, Doing, and Done columns
- [x] Task cards rendered dynamically from a JavaScript data array
- [x] Priority-coded task cards (Low / Medium / High)
- [x] Hashtag-based project organization
- [x] Task filter tabs (All Tasks / Pending / Doing / Done)
- [x] Task creation modal (title, description, subtasks, status, due date, tags, priority)
- [x] Responsive layout (desktop, tablet, mobile)
- [x] Productivity statistics overview
- [x] Sidebar navigation with user profile section

### Planned

- [ ] Drag-and-drop tasks between columns
- [ ] Task creation modal writes to actual task data
- [ ] Live task counts on column badges
- [ ] Functional search
- [ ] Functional filter and sort controls
- [ ] Create / edit / delete projects
- [ ] Data persistence (currently resets on page reload — no storage layer yet)

---

## UI Structure

### Sidebar
- TaskFlow branding
- Home / Tasks / About navigation
- Projects list, organized by hashtag
- User profile section

### Header
- Search bar
- Task filter tabs
- Filter button
- Sort button
- Add Task action

### Kanban Board
- **Pending**
- **Doing**
- **Done**

### Task Creation
- Task title
- Description
- Status
- Due date
- Project / tag
- Priority
- Subtasks

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| Tailwind CSS | Styling and responsive design |
| JavaScript | Task data storage and dynamic board rendering |

No backend, framework (React/Vue/Angular), or build tool is used — this is a plain HTML/CSS/JS project by design.

---

## Project Structure

*Based on the files we've built together in this conversation — verify this matches your actual repo before publishing.*

```text
TaskFlow/
├── index.html      # Main dashboard (All Tasks board)
├── home.html        # Home / overview page
├── about.html        # About page
├── pending.html       # Pending tasks view
├── doing.html          # Doing tasks view
├── done.html            # Done tasks view
├── script.js             # Task data array + rendering logic
├── logo.jpeg               # TaskFlow logo
└── README.md
```

---

<div align="center">

Built by **Tariq Javed**

</div>
