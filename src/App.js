import React from 'react';
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
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   {/* <FunctionalComponent/> */}
    //   {/* <ClassComponent/> */}
    //   {/* <Todo/> */}
    //   {/* <Counter/> */}
    //   {/* <Timer/> */}
    //   {/* <ApiClass/> */}
    // </div>



    <Router>
    
    <div className="container">
      <header className="row">
        <div className="col-sm-12 bg-info">
          <Header />
        </div>
      </header>


      <main className="row">
        <div className="col-sm-12">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/timer" component={Timer}/>
          <Route exact path="/apiclass" component={ApiClass}/>
          <Route exact path="/functionalcomponent" component={FunctionalComponent} />
          <Route exact path="/classcomponent" component={ClassComponent} />
        </Switch>
        </div>
      </main>

      <footer className="row">
        <div className="col-sm-12 bg-warning">
          <Footer/>
        </div>
      </footer>
    </div>
    </Router>
  );
}

export default App;
