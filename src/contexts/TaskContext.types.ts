export type Task = {
  taskId: string;
  taskTitle: string;
  taskDescription: string;
  taskTime: number;
  isCompleted: boolean;
};

export type TaskState = {
  tasks: Task[];
};

export type TaskAction =
  | {
      type: "ADD_TASK" | "UPDATE_TASK" | "DELETE_TASK";
      payload: Task;
    }
  | {
      type: "SET_TASKS";
      payload: Task[];
    };

export type TaskProviderProps = {
  children: React.ReactNode;
};

export type TaskContextType = {
  taskState: TaskState;
  dispatchTask: React.Dispatch<any>;
};
