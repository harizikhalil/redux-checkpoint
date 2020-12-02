import React, { useState } from "react";
import {connect} from 'react-redux'
import {addTask} from '../redux/action'

export const Addtask = (props) => {
  const [newTask, setNewTask] = useState("");

  const addNewTask=()=>{
    props.addTask({
      id:Math.random(),
      description:newTask,
      isdone:false
    })
    setNewTask('')
  }
  return (
    <div className="row" style={{width:"600px",margin:"30px auto"}}>
      <input
        type="text"
        value={newTask}
        placeholder=" Add new task"
        className=" col form-control"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className=" btn btn-primary mx-2" onClick={addNewTask}>Add Task</button>
    </div>
  );
};
const mapDispatchToProps=(dispatch)=>{
  return{
    addTask:(task)=>dispatch(addTask(task))
  }
}
export default connect(null,mapDispatchToProps)(Addtask);
