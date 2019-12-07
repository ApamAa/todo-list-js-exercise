const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;

};





const task1 = newTask("watering plants", "put them on the balconey");
const task2 = newTask("making tea");

task1.logState();
task1.markCompleted();
task1.logState();
task2.logState();
task2.markCompleted();
task2.logState();
