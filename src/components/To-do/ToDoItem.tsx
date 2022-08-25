import { useTasks } from "../../contexts/TaskContext";
import { deleteTask } from "../../utils/taskActions";
import { Link } from "react-router-dom";
import "./ToDoItem.css";
import { Task } from "../../contexts/TaskContext.types";

type ToDoItemProps = {
  task: Task;
  setTaskDetails: React.Dispatch<any>;
  setShowModal: React.Dispatch<any>;
};

export const ToDoItem = ({
  task,
  setTaskDetails,
  setShowModal,
}: ToDoItemProps) => {
  const { dispatchTask } = useTasks();

  const { taskTitle, isCompleted } = task;

  const onEditClick = (
    task: Task,
    setTaskDetails: React.Dispatch<any>,
    setShowModal: React.Dispatch<any>
  ) => {
    setTaskDetails(task);
    setShowModal(true);
  };

  return (
    <div
      className={`todo-item flex justify-between align-ctr px-1 py-1 ${
        isCompleted ? "task-complete " : ""
      }`}
    >
      <Link to="/pomodoro" state={{ task }} className="flex-1">
        <p className={`h4  ${isCompleted ? "txt-strike " : ""}`}>{taskTitle}</p>
      </Link>
      <div className="flex gap-1 align-ctr">
        <i
          className="fas fa-edit"
          onClick={() => onEditClick(task, setTaskDetails, setShowModal)}
        ></i>
        <i
          className="fas fa-trash-alt"
          onClick={() => deleteTask(task, dispatchTask)}
        ></i>
      </div>
    </div>
  );
};
