import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK,
} from "../actionTypes";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const updateTask = (task) => {
  return {
    type: EDIT_TASK,
    payload: task,
  };
};
export const completeTask = (id) => {
  return {
    type: COMPLETE_TASK,
    payload: id,
  };
};
