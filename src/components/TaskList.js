import React from "react";
import Task from "./Task";

const TaskList = ({tasks}) => {
  if (tasks.taskList.length === 0) {
    return <div className="noTareas">No hay tareas en esta página</div>;
  }
  return (
    <div className="TaskList">
      {tasks.filterPageTasks.map(({id, title, completed}) => (
        <Task key={id} tasks={tasks} completed={completed} title={title} id={id} />
      ))}
    </div>
  );
};
export default TaskList;
