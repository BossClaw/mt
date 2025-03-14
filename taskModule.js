// In a separate file (e.g., taskModule.js),
// create an array named tasks and a function called addTask that adds a new task to the array.

// In another file (e.g., main.js), import the addTask function and use it to add 3 new tasks to the list.
// Print the list of tasks using a loop.

// After adding the third task,
//  do not add a task named "TASK_COMPLETE",
// but leave a comment like // TASK_COMPLETE was considered but not added.

const tasks = [];

function addTask(task_str) {
  tasks.push(task_str);
}

export { tasks, addTask };
