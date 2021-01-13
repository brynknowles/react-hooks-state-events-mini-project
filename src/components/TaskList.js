import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  // console.log(tasks)

  const taskArray = tasks.map((taskObj) => {
    return <Task key={taskObj.text} category={taskObj.category} text={taskObj.text} />
  })

  return (
    <div className="tasks">
      {taskArray}
    </div>
  );
}

export default TaskList;

