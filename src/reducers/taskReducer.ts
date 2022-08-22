import React, { ReducerStateWithoutAction } from "react";
import { defaultTaskState } from "../contexts/defaultTaskState";
import { TaskState, TaskAction } from "../contexts/TaskContext.types";

export const taskReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: state.tasks.concat(action.payload) };

    case "UPDATE_TASK":
      const updatedTasks = state.tasks.map((task) =>
        task.taskId === action.payload.taskId
          ? {
              ...task,
              taskTitle: action.payload.taskTitle,
              taskDescription: action.payload.taskDescription,
              taskTime: action.payload.taskTime,
            }
          : task
      );

      return { ...state, tasks: updatedTasks };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.taskId !== action.payload.taskId
        ),
      };

    case "SET_TASKS":
      return { ...state, tasks: action.payload };

    case "SET_TASKS":
      return defaultTaskState;
    default:
      return state;
  }
};
