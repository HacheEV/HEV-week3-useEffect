import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faCoffee, faWindowClose } from '@fortawesome/free-solid-svg-icons'


const Task = ({tasks, title, completed, id}) => {
  const doCheck = () =>{
   tasks.checkTask(id);
  }
  const clickDelete = () =>{
    tasks.deleteTask(id);
  }
  

  return (
    <div className="Task">
      <div className="textContainer">
        <input classname="Tasksitem" type="checkbox" checked={completed} onClick={doCheck}/>
        <span className="textTask">{title} </span>
      </div>
      <div>
        <span >
          <button className="button" onClick={() => tasks.addTask("Copy of "+ title)}><FontAwesomeIcon icon={faClone}/></button>
        </span>
        <span >
          <button className="button" onClick={clickDelete}><FontAwesomeIcon icon={faWindowClose}/></button>
        </span>
      </div>
    </div>
  );
};
export default Task;
