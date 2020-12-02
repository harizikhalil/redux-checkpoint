import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteTask, updateTask, completeTask } from "../redux/action";
export const Task = ({ task, delTask, updateTasks, completeTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [taskupdate, setTaskUpdate] = useState(task.description);
  const handleUpdate = () => {
    updateTasks({ id: task.id, value: taskupdate });
    setIsEdit(!isEdit);
  };
  return (
    <div>
      {isEdit ? (
        <div className="task-update">
          <input
            type="text"
            className="form-control"
            value={taskupdate}
            onChange={(e) => {
              setTaskUpdate(e.target.value);
              console.log(taskupdate);
            }}
          />
          <button className="btn btn-success m-2" onClick={handleUpdate}>
            update
          </button>
        </div>
      ) : (
        <div className="task-items">
          <div style={{ width: "300px" }}>
            <h3 className={task.isdone ? "complete" : ""}>
              {task.description}
            </h3>
          </div>
          <div>
            <button
              className="btn btn-danger m-2"
              onClick={() => delTask(task.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={() => setIsEdit(!isEdit)}
            >
              Edit
            </button>
            <button
              className="btn btn-info m-2"
              onClick={() => completeTask(task.id)}
            >
              {task.isdone ? "undo" : "done"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    delTask: (id) => dispatch(deleteTask(id)),
    updateTasks: ({ id, value }) => dispatch(updateTask({ id, value })),
    completeTask: (id) => dispatch(completeTask(id)),
  };
};
export default connect(null, mapDispatchToProps)(Task);
