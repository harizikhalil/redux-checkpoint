import { ADD_TASK, DELETE_TASK, EDIT_TASK,COMPLETE_TASK } from "../actionTypes";


const Taskreducer = (state =[], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);
      case EDIT_TASK:
       let newTasks=state.map((task)=>task.id===action.payload.id ? {...task,description:action.payload.value}:task)
       return newTasks;
       case COMPLETE_TASK:
         return state.map((task)=>task.id===action.payload ? {...task,isdone:!task.isdone} : task )
    default:
      return state;
  }
};

export default Taskreducer;
