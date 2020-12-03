import React, { useEffect } from "react";

function NewToDo({tasks}) {

  const [value, setValue] = React.useState(
    localStorage.getItem('value') || ''
  );

  useEffect(() => {
    localStorage.setItem("value", value);
  }, [value]);

  const onChange = e => setValue(e.target.value);
   
  return (
    
      <input className="newToDo" value={value}  onChange={onChange} placeholder="Type a new task to add" onKeyPress={e => {
        if(e.code === 'Enter'){
          
          tasks.addTask(e.target.value);
          setValue('');

                    
        }
      }}/>
    
  );
}
export default NewToDo;
