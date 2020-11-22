import React from "react";


const TaskCounter = ({tasks}) => {
  
  let totalTask = tasks.taskList.length+1;
  const notDone = tasks.taskList.filter(task => !task.done).length;

  if(totalTask-1 === notDone){
    totalTask = notDone;
  }

  return (
    <div className="TaskCounter">
      {notDone} tasks left of {totalTask}
    </div>
  );
};

export default TaskCounter;
