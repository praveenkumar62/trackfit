import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import CreateUser from './Components/CreateUser';
import EditExercise from './Components/EditExercise';
import CreateExercise from './Components/CreateExercise';
import ExerciseList from './Components/ExerciseList';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="container-app">
          <Navbar />
          <Route exact path='/' component={ExerciseList} />
          <Route path='/edit/:id' component={EditExercise} />
          <Route path='/create' component={CreateExercise} />
          <Route path='/user' component={CreateUser} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
