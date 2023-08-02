import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';

class App extends Component {
  render() {
    
    console.log('we are about to list the employees');
    const showEmployees = true;


    return (
      <div className="App">

        <div className="App-header">
        
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>hello there i am salman</p>
        <p>we could do a lot better!!!couln't we??</p>
        <p>happy now?</p>

        {showEmployees ? (

        <div>

        <Employee name="jewel" role="Filing specialist"></Employee>
        <Employee name="sal"/>
        <Employee/>

        </div>
        )
        :(
        <p>you cannot see the employees</p> )
  }
      </div>
    );
  }
}

export default App;
