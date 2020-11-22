import React from "react";
import data from "../tasks.json";

const OverWork = (props) => {
  const notDone = data.tasks.filter((task) => !task.done).length;
  const muchWork = 5;

  if (notDone > muchWork) {
    return <div className="OverWork">Cuidado! Tienes mucho trabajo!</div>;
  }
  return null;
};

export default OverWork;
