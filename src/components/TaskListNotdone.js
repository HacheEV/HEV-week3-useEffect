import React from "react";
import Task from "./Task";

const TaskListNotDone = (props) => {
  const notDone = props.tasks.filter((task) => !task.completed);

  return (
    <div className="TaskList">
      {notDone.map((task) => (
        <Task completed={task.completed} title={task.title} />
      ))}
    </div>
  );
};

export default TaskListNotDone;
