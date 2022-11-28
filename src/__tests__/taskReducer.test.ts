import { taskReducer } from "../reducers/taskReducer";
import { defaultTaskState } from "../contexts/defaultTaskState";

describe("taskReducer tests", () => {
  test("should add a new task", () => {
    const expectedState = {
      tasks: [
        {
          taskId: "123",
          taskTitle: "Test title",
          taskDescription: "test description",
          taskTime: 15,
          isCompleted: false,
        },
      ],
    };

    const state = taskReducer(defaultTaskState, {
      type: "ADD_TASK",
      payload: {
        taskId: "123",
        taskTitle: "Test title",
        taskDescription: "test description",
        taskTime: 15,
        isCompleted: false,
      },
    });

    expect(state).toEqual(expectedState);
  });

  test("should update an existing task", () => {
    const beforeState = {
      tasks: [
        {
          taskId: "123",
          taskTitle: "Test title",
          taskDescription: "test description",
          taskTime: 15,
          isCompleted: false,
        },
      ],
    };

    const expectedState = {
      tasks: [
        {
          taskId: "123",
          taskTitle: "Test title Updated",
          taskDescription: "test description Updated",
          taskTime: 5,
          isCompleted: false,
        },
      ],
    };

    const state = taskReducer(beforeState, {
      type: "UPDATE_TASK",
      payload: {
        taskId: "123",
        taskTitle: "Test title Updated",
        taskDescription: "test description Updated",
        taskTime: 5,
        isCompleted: false,
      },
    });

    expect(state).toEqual(expectedState);
  });

  test("should delete an existing task", () => {
    const beforeState = {
      tasks: [
        {
          taskId: "123",
          taskTitle: "Test title 1",
          taskDescription: "test description 1",
          taskTime: 15,
          isCompleted: false,
        },
        {
          taskId: "124",
          taskTitle: "Test title 2",
          taskDescription: "test description 2",
          taskTime: 5,
          isCompleted: false,
        },
      ],
    };

    const expectedState = {
      tasks: [
        {
          taskId: "124",
          taskTitle: "Test title 2",
          taskDescription: "test description 2",
          taskTime: 5,
          isCompleted: false,
        },
      ],
    };

    const state = taskReducer(beforeState, {
      type: "DELETE_TASK",
      payload: {
        taskId: "123",
        taskTitle: "Test title 1",
        taskDescription: "test description 1",
        taskTime: 15,
        isCompleted: false,
      },
    });

    expect(state).toEqual(expectedState);
  });

  test("should set tasks lists after making getAllTasks() call", () => {
    const expectedState = {
      tasks: [
        {
          taskId: "123",
          taskTitle: "Test title",
          taskDescription: "test description",
          taskTime: 15,
          isCompleted: false,
        },
      ],
    };

    const state = taskReducer(defaultTaskState, {
      type: "SET_TASKS",
      payload: [
        {
          taskId: "123",
          taskTitle: "Test title",
          taskDescription: "test description",
          taskTime: 15,
          isCompleted: false,
        },
      ],
    });

    expect(state).toEqual(expectedState);
  });
});
