import React, { Fragment, useState } from 'react';
import './App.css';
import Employee from './components/Employee';

function App() {
  console.log('we are about to list the employees');
  const [role, setRole] = useState('dev');
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
      <p>we could do a lot better!!! couldn't we??</p>
      <p>happy now?</p>
      {showEmployees ? (
        <Fragment>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="jewel" role="Filing specialist" />
          <Employee name="sal" role={role} />
          <Employee />
        </Fragment>
      ) : (
        <p>you cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
