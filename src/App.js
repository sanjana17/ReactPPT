import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicComponent from './basicComponent/BasicComponent'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BasicForm from './BasicForm/BasicForm';
import BasicStateLess from './BasicStateless/BasicStateless';


function App() {
  return (
    <div className="App">
        hello world
      <Router>
      <Route exact path="/basicComponent" component={ BasicComponent } />
      <Route exact path="/helloWorld" component={ BasicComponent } />
      <Route exact path="/basicForm" component={ BasicForm } />
      <Route exact path="/basicStateless" render={() => <BasicStateLess name='app'/>}/>
      </Router>
    </div>
  );
}

export default App;
