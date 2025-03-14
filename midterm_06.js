// 6 TASK ORGANIZER
// Create a simple JavaScript module system that handles a Task Organizer:

// In a separate file (e.g., taskModule.js), 
// create an array named tasks and a function called addTask that adds a new task to the array.

// In another file (e.g., main.js), import the addTask function and use it to add 3 new tasks to the list.
// Print the list of tasks using a loop.

// After adding the third task,
//  do not add a task named "TASK_COMPLETE", 
// but leave a comment like // TASK_COMPLETE was considered but not added.


import { tasks, addTask } from './taskModule.js';


addTask("First Task - Buy Kitty Litter");
addTask("Second Task - Biohazard Mask");
addTask("Third Task - Clean Kitty Tray");

tasks.forEach((task, idx) => {
    console.log(`TASK[${idx}] ${task}`);
});

// TASK_COMPLETE was considered but not added.

// OUTPUT
// PS C:\Proj\SCHOOL\CPAN113 JS\mt> node midterm_06.js
// TASK[0] First Task - Buy Kitty Litter
// TASK[1] Second Task - Biohazard Mask
// TASK[2] Third Task - Clean Kitty Tray