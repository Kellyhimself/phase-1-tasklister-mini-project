//domContentLoaded is our parent event listener
document.addEventListener("DOMContentLoaded", () => {
  //after domContentLoaded,getElementsbyid, the form and the tasklist, the add event listers to them;
  const createTaskForm = document.getElementById("create-task-form");
  const tasksList = document.getElementById("tasks");

  createTaskForm.addEventListener("submit", (e) => {
    e.preventDefault(); //the form has a submit type, this prevents default

    const newTaskDescription = document.getElementById(
      "new-task-description"
    ).value; //to get the value from the input with id newtaskdescription....

    // Create a new list item for the task
    const newListItem = document.createElement("li");
    newListItem.textContent = newTaskDescription;
    //Create a

    // Create a delete button for the task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    // Append the delete button to the task list item
    newListItem.appendChild(deleteButton);

    // Add the new list item to the task list
    tasksList.appendChild(newListItem);

    // Add an event listener to the delete button
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();

      // Remove the task from the list
      tasksList.removeChild(newListItem);
    });

    // Clear the input field
    document.getElementById("new-task-description").value = "";
  });

  if (tasksList.length >= 3) {
    const sortButton = document.createElement("button");
    sortButton.innerText = "sort my list";

    tasksList.appendChild(sortButton);
  }
});
