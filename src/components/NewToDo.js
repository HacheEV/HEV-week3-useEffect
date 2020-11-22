import React from "react";

function NewToDo({tasks}) {
  return (
    
      <input className="newToDo" placeholder="Type a new task to add" onKeyPress={e => {
        if(e.code === 'Enter'){
          tasks.addTask(e.target.value);
          
        }
      }}/>
    
  );
}
export default NewToDo;
