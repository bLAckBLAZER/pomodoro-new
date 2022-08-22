import React, { createContext, useContext, useState, useReducer } from "react";
import { taskReducer } from "../reducers";
import { defaultTaskState } from "./defaultTaskState";
import {
  TaskContextType,
  TaskProviderProps,
  TaskState,
} from "./TaskContext.types";

const initialState: TaskContextType = {
  taskState: defaultTaskState,
  dispatchTask: () => null,
};

const TaskContext = createContext<TaskContextType>(initialState);

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [taskState, dispatchTask] = useReducer(taskReducer, defaultTaskState);

  return (
    <TaskContext.Provider value={{ taskState, dispatchTask }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTasks = () => useContext(TaskContext);

export { TaskProvider, useTasks };
