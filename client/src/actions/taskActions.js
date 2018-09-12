import axios from 'axios';

const GET_TASKS = 'GET_TASKS';
const GET_TASK = 'GET_TASK';
const LOADING = 'LOADING';
// const COMPLETE_TASK = 'COMPLETE_TASK';
// const ADD_TASK = 'ADD_TASK';



// Add task
export const addTask = (postData, history) => dispatch => {
  
  axios
    .post('/api/task/addTask', postData)
    .then(res =>
      history.push('/')
    )
    
};

// Update task
export const updateTask = (postData, id, history) => dispatch => {
  
  axios
    .post(`/api/task/updateTask/${id}`, postData)
    .then(res =>
      history.push('/')
    )
    
};

// Get Tasks
export const viewTask = () => dispatch => {
  
  axios
    .get('/api/task/viewTask')
    .then(res =>     
      dispatch({
        type: GET_TASKS,
        payload: res.data       
        
      })
    )

};

// Get task
export const getDetails = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/task/viewTask/${id}`)
    .then(res =>
      dispatch({
        type: GET_TASK,
        payload: res.data
      })
    )
   
};

export const completeTask = (id , history)=> dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/task/completeTask/${id}`)
    .then(res =>
      history.push('/')
    )
   
};

export const deleteTask = (id , history)=> dispatch => {
  
  axios
    .delete(`/api/task/deleteTask/${id}`)
    .then(res =>
      history.push('/')
    )
   
};


export const setPostLoading = () => {
  return {
    type: LOADING
  };
};