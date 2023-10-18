const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function addTodo() {
    const taskText = input.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);

        input.value = "";
    }
}

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
