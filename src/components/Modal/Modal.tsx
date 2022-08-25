import { useState } from "react";
import "./Modal.css";
import { addTask, updateTask } from "../../utils/taskActions";
import { defaultNewTask } from "./defaultNewTask";
import { useTasks } from "../../contexts/TaskContext";
import { Task } from "../../contexts/TaskContext.types";

type ModalProps = {
  taskDetails: Task | undefined;
  setShowModal: React.Dispatch<any>;
  setTaskDetails: React.Dispatch<any>;
};

export const Modal = ({
  taskDetails,
  setShowModal,
  setTaskDetails,
}: ModalProps) => {
  const { taskState, dispatchTask } = useTasks();

  const [newTask, setNewTask] = useState(taskDetails || defaultNewTask);
  const [error, setError] = useState("");

  // if taskdetails are present then we must be editing an existing task
  const isUpdate = taskDetails ? true : false;

  const resetModal = () => {
    setShowModal(false);
    setNewTask(defaultNewTask);
    setTaskDetails(null);
  };

  return (
    <div className={`modal-container`}>
      <div className="modal">
        <i
          className="fas fa-times"
          id="close-modal"
          onClick={() => resetModal()}
        ></i>

        <input
          type="text"
          id="task-title"
          className="modal-input"
          placeholder="Title"
          value={newTask.taskTitle}
          onChange={(e) =>
            setNewTask({ ...newTask, taskTitle: e.target.value })
          }
        />
        <textarea
          id="task-desc"
          className="modal-input"
          placeholder="Description..."
          value={newTask.taskDescription}
          onChange={(e) =>
            setNewTask({ ...newTask, taskDescription: e.target.value })
          }
        />
        <input
          type="number"
          id="task-time"
          className="modal-input"
          placeholder="Time in minutes"
          min={0}
          value={newTask.taskTime}
          onChange={(e) =>
            setNewTask({ ...newTask, taskTime: Number(e.target.value) })
          }
        />

        {error ? <h4 className="error txt-center">{error}</h4> : null}

        <div className="flex justify-between">
          <button className="btn btn-secondary" onClick={() => resetModal()}>
            Cancel
          </button>
          {isUpdate ? (
            <button
              className="btn btn-primary"
              onClick={() =>
                updateTask({
                  newTask,
                  dispatchTask,
                  setError,
                  resetModal,
                })
              }
            >
              Update
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() =>
                addTask(newTask, dispatchTask, setError, resetModal)
              }
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
