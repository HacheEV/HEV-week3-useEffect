import React from "react";
import Task from "./Task";

const TaskListNotDone = (props) => {
  const notDone = props.tasks.filter((task) => !task.done);

  return (
    <div className="TaskList">
      {notDone.map((task) => (
        <Task done={task.done} title={task.title} />
      ))}
    </div>
  );
};

export default TaskListNotDone;
