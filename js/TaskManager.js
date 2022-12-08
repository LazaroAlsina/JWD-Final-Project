class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(name, description, assignedTo, dueDate) {
    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: "TODO",
    };

    const task1 = {
      id: 1,
      name: "Take out the trash",
      description: "Take out the trash to the front of the house",
      assignedTo: "Nick",
      dueDate: "2022-09-15",
      status: "TODO",
    };

    const task2 = {
      id: 2,
      name: "Cook Dinner",
      description:
        "Prepare a healthy serving of pancakes for the family tonight",
      assignedTo: "Nick",
      dueDate: "2022-09-30",
      status: "TODO",
    };

    // Push the task to the tasks property
    this.tasks.push(task);
  }
}
