import { Task } from "../../contexts/TaskContext.types";

export const defaultNewTask: Task = {
  taskId: "",
  taskTitle: "",
  taskDescription: "",
  taskTime: 15,
  isCompleted: false,
};
