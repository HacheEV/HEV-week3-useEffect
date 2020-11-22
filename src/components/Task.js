import React from "react";


const Task = ({tasks, title, done, id}) => {
  const doCheck = () =>{
   tasks.checkTask(id);
  }
  const clickDelete = () =>{
    tasks.deleteTask(id);
  }
  

  return (
    <div className="Task">
      <div>
        <input classname="Tasksitem" type="checkbox" checked={done} onClick={doCheck}/>
        <span className="textTask">{title} </span>
      </div>
      <div>
        <span >
          <button className="button" onClick={() => tasks.addTask("Copy of "+ title)}>Clone</button>
        </span>
        <span >
          <button className="button" onClick={clickDelete}>Delete</button>
        </span>
      </div>
    </div>
  );
};
export default Task;
