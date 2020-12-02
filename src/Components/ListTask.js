import React from "react";
import Task from "./Task";
import { connect } from "react-redux";

export const ListTask = (props) => {
  console.log(props.tasks);
  return (
    <div>
      {props.tasks.length !== 0 ? (
        props.tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })
      ) : (
        <h3 style={{textAlign:"center"}}> Please add new tasks ....</h3>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tasks: state.Taskreducer,
  };
};

export default connect(mapStateToProps)(ListTask);
