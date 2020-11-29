import React from 'react';

const NewTasks = ({tasks}) =>{
    return(
        <button className="buttonJason" onClick={() => tasks.newTasks()}>View Jason Tasks</button>
    )
}
export default NewTasks;