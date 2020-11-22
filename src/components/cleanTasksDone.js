import React from 'react';

const CleanCompleted = ({tasks}) =>{

    return (
         <button className="buttonClean" onClick={tasks.Clean}>Clean tasks completed</button>
    )
}

export default CleanCompleted;