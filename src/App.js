import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Course from './course';

class App extends Component {
  render() {
    var courses=[
      {name:'complete ios10 course',price:199},
      {name:'complete c course',price:199},
      {name:'complete c++ course',price:199},
      {name:'complete python course',price:199},
    ]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <Course items={courses} />
      </div>
    );
  }
}

export default App;
