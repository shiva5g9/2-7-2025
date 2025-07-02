const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        addTask();
      }
    });

    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");
      li.textContent = taskText;

      // Toggle complete on click
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "✕";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent toggling complete
        li.remove();
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      taskInput.value = "";
    }