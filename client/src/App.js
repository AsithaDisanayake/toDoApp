import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AddTask from './components/AddTask';
import ViewTask from './components/ViewTask';
import TaskDetails from './components/TaskDetails';
import EditTask from './components/EditTask';
// import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <br /> <br />
            {/* < Route exact path="/" component = {Landing} /> */}
            <div className="container-fluid jumbotron col-md-4">
              
              <div className="panel panel">
                <div className="panel-heading-info">
                < Route exact path="/addtask" component = {AddTask} />
               
                </div>
                <div className="panel-body">
                < Route exact path="/" component = {ViewTask} />
                <Route exact path="/taskdetails/:id" component={TaskDetails}/>
                <Route exact path="/edittask" component={EditTask}/>
                </div>
              </div>


            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
