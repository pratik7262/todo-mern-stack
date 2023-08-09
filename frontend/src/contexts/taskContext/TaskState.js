// import { useState } from "react";
import TaskContext from "./taskContext";
import { createTask, getTasks, updateTask } from "./functions";

const TaskState = (props) => {
  let states = { createTask, getTasks, updateTask };
  return (
    <TaskContext.Provider value={states}>{props.children}</TaskContext.Provider>
  );
};

export default TaskState;
