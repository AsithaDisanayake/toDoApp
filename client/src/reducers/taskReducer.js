import {
  ADD_TASK,
  GET_TASKS,
  GET_TASK,
  LOADING

 
} from '../actions/types';

const initialState = {
  
  tasks: null,
  task : null,
  loading: false
 
}; 

export default function(state = initialState, action) {
  switch (action.type) {

    case LOADING:
      return {
        ...state,
        loading: true
      };
   
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
        
      };

      case GET_TASK:
      return {
        ...state,
        task: action.payload
        
      };
    
    case ADD_TASK:
      return {
        ...state,
        task: action.payload,
      };
    
    default:
      return state;
  }
}