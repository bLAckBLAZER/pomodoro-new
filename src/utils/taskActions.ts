import { v4 as uuid } from "uuid";
import {
  collection,
  setDoc,
  doc,
  updateDoc,
  where,
  getDocs,
  deleteDoc,
  query,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { getLocalStorage } from "./localStorageCalls";
import React from "react";
import { Task } from "../contexts/TaskContext.types";

export const validateTask = (newTask: Task, setError: React.Dispatch<any>) => {
  const { taskTitle, taskDescription } = newTask;

  if (!taskTitle) {
    setError("Title cannot be blank!");
    return false;
  }

  if (!taskDescription) {
    setError("Description cannot be blank!");
    return false;
  }

  return true;
};

export const addTask = async (
  newTask: Task,
  dispatchTask: React.Dispatch<any>,
  setError: React.Dispatch<any>,
  resetModal: () => void
) => {
  if (!validateTask(newTask, setError)) {
    return;
  }

  let taskId = uuid();
  let taskToAdd = { ...newTask, taskId, author: auth?.currentUser?.uid };

  // Firebase call to add
  try {
    await setDoc(doc(db, "tasks", taskId), taskToAdd);

    dispatchTask({
      type: "ADD_TASK",
      payload: taskToAdd,
    });

    resetModal();
  } catch (err) {
    console.error(err);
  }
};

type updateTaskProps = {
  newTask: Task;
  dispatchTask: React.Dispatch<any>;
  setError: React.Dispatch<any>;
  resetModal: () => void;
};

export const updateTask = async ({
  newTask,
  dispatchTask,
  setError,
  resetModal,
}: updateTaskProps) => {
  if (!validateTask(newTask, setError)) {
    return;
  }

  try {
    const taskRef = doc(db, "tasks", newTask.taskId);
    await updateDoc(taskRef, newTask);

    dispatchTask({ type: "UPDATE_TASK", payload: newTask });
  } catch (err) {
    console.error(err);
  }

  resetModal();
};

export const deleteTask = async (
  task: Task,
  dispatchTask: React.Dispatch<any>
) => {
  try {
    const taskRef = doc(db, "tasks", task.taskId);
    await deleteDoc(taskRef);

    dispatchTask({ type: "DELETE_TASK", payload: task });
  } catch (err) {
    console.error(err);
  }
};

export const getAllTasks = async (dispatchTask: React.Dispatch<any>) => {
  try {
    const q = query(
      collection(db, "tasks"),
      where("author", "==", getLocalStorage("token"))
    );
    const querySnapshot = await getDocs(q);

    let allTasks: Task[] = [];

    querySnapshot.forEach((doc) => allTasks.push(doc.data() as Task));

    dispatchTask({ type: "SET_TASKS", payload: allTasks });
  } catch (err) {
    console.error(err);
  }
};

export {};
