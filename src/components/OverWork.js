import React from "react";



const OverWork = ({tasks}) => {
  const notDone = tasks.taskList.filter((task) => !task.completed).length;
  const muchWork = 5;

  if (notDone > muchWork) {
    return <div className="OverWork">Warning! You have too much work!</div>;
  }
  return null;
};

export default OverWork;
