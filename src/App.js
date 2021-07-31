import React from 'react';
import { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import ApiClass from './ApiClass';
import ChildClassComponent from './ChildClassComponent';
import Todo from './ToDo';
import Counter from './Counter';
import Timer from './Timer';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

function App(){
 
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <FunctionalComponent/> */}
      {/* <ClassComponent/> */}
      <Todo/>
      {/* <Counter/> */}
      {/* <Timer/> */}
      {/* <ApiClass/> */}
    </div>



  )  

}

export default App;
